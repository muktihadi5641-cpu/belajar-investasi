/* ============================================================
   Belajar Investasi — Reader App
   Vanilla JS. No build step.
   ============================================================ */

const STORAGE_KEYS = {
  theme: 'invest.theme',
  fontSize: 'invest.fontSize',
  progress: 'invest.progress',
  lastLesson: 'invest.lastLesson'
};

const state = {
  lessons: [],
  flatLessons: [],
  currentId: null
};

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', init);

function init() {
  state.lessons = window.LESSONS || [];
  state.flatLessons = state.lessons.flatMap(g => g.items);

  setupTheme();
  setupFontSize();
  setupSidebar();
  setupResetButton();
  setupScrollProgress();
  renderSidebar();
  updateOverallProgress();

  window.addEventListener('hashchange', loadFromHash);
  loadFromHash();

  configureMarked();
}

/* ---------- Theme ---------- */
function setupTheme() {
  /* Initial theme is already set by the inline bootstrap in <head>.
     Here we only wire the toggle. */
  document.getElementById('themeBtn').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(STORAGE_KEYS.theme, next); } catch (e) {}
  });
}

/* ---------- Font size ---------- */
function setupFontSize() {
  const sizes = ['sm', 'md', 'lg'];
  const saved = localStorage.getItem(STORAGE_KEYS.fontSize) || 'md';
  document.documentElement.dataset.fontSize = saved;
  document.getElementById('fontSizeBtn').addEventListener('click', () => {
    const curr = document.documentElement.dataset.fontSize || 'md';
    const next = sizes[(sizes.indexOf(curr) + 1) % sizes.length];
    document.documentElement.dataset.fontSize = next;
    localStorage.setItem(STORAGE_KEYS.fontSize, next);
  });
}

/* ---------- Sidebar ---------- */
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebarToggle');
  const scrim = document.getElementById('sidebarScrim');

  const setOpen = (open) => {
    sidebar.dataset.open = open ? 'true' : 'false';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => setOpen(sidebar.dataset.open !== 'true'));
  scrim.addEventListener('click', () => setOpen(false));
  window.addEventListener('hashchange', () => {
    if (window.matchMedia('(max-width: 1023.98px)').matches) setOpen(false);
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- Progress ---------- */
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '{}');
  } catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(p));
}
function markLessonViewed(id) {
  const p = loadProgress();
  if (!p[id]) {
    p[id] = { viewed: true, viewedAt: new Date().toISOString() };
    saveProgress(p);
    renderSidebar();
    updateOverallProgress();
  }
}
function updateOverallProgress() {
  const progress = loadProgress();
  const total = state.flatLessons.filter(l => l.available).length;
  const done = state.flatLessons.filter(l => l.available && progress[l.id]).length;
  const pct = total === 0 ? 0 : (done / total) * 100;
  const fill = document.getElementById('overallProgressFill');
  const label = document.getElementById('overallProgressLabel');
  fill.style.width = pct + '%';
  label.textContent = `${done} dari ${total} lesson dibaca`;
}

function setupResetButton() {
  const btn = document.getElementById('resetProgressBtn');
  btn.addEventListener('click', () => {
    if (confirm('Reset semua progress baca? Aksi ini tidak bisa dibatalkan.')) {
      localStorage.removeItem(STORAGE_KEYS.progress);
      renderSidebar();
      updateOverallProgress();
    }
  });
}

/* ---------- Sidebar render ---------- */
function renderSidebar() {
  const nav = document.getElementById('lessonNav');
  nav.innerHTML = '';
  const progress = loadProgress();
  const template = document.getElementById('lesson-link-template').content;

  state.lessons.forEach(group => {
    const grp = document.createElement('div');
    grp.className = 'fase-group';
    const title = document.createElement('p');
    title.className = 'fase-group__title';
    title.textContent = group.faseTitle;
    grp.appendChild(title);

    group.items.forEach(lesson => {
      const node = template.cloneNode(true);
      const a = node.querySelector('.lesson-link');
      const num = node.querySelector('.lesson-link__number');
      const ttl = node.querySelector('.lesson-link__title');

      num.textContent = 'L' + lesson.id;
      ttl.textContent = lesson.title;

      if (!lesson.available) {
        a.dataset.status = 'unavailable';
        a.href = '#';
        a.setAttribute('aria-disabled', 'true');
        a.addEventListener('click', (e) => e.preventDefault());
      } else {
        a.href = '#lesson-' + lesson.id;
        if (progress[lesson.id]) a.dataset.status = 'done';
      }

      if (lesson.id === state.currentId) a.setAttribute('aria-current', 'page');
      grp.appendChild(a);
    });

    nav.appendChild(grp);
  });
}

/* ---------- Marked & KaTeX ---------- */
function configureMarked() {
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false
  });
}

function renderMarkdown(md) {
  // Pre-process custom syntax: ":::why title" blocks
  md = preprocessWhyBlocks(md);
  md = preprocessCallouts(md);

  // Protect math blocks from marked.js mangling backslashes.
  // Without this, "\\[4pt]" becomes "\[4pt]", "\,\text{}" becomes ",\text{}", etc.
  const mathStash = [];
  const stash = (content) => {
    const i = mathStash.length;
    mathStash.push(content);
    return `@@MATH${i}MATH@@`;
  };
  // Display math: $$...$$
  md = md.replace(/\$\$([\s\S]+?)\$\$/g, (m) => stash(m));
  // Inline math: $...$ (avoid matching escaped \$ and double $$ which is already handled)
  md = md.replace(/(?<![\\$])\$(?!\$)([^\n$]+?)(?<!\\)\$(?!\$)/g, (m) => stash(m));

  let html = marked.parse(md);

  // Restore math blocks
  html = html.replace(/@@MATH(\d+)MATH@@/g, (_, i) => mathStash[parseInt(i, 10)]);

  return html;
}

function preprocessWhyBlocks(md) {
  // :::why Title goes here
  // body
  // :::
  return md.replace(/^:::why\s+(.+?)\n([\s\S]*?)^:::\s*$/gm, (_, title, body) => {
    const innerHtml = marked.parse(body.trim());
    return `<details class="why-block"><summary class="why-block__summary"><span class="why-block__icon">?</span><span>${escapeHtml(title.trim())}</span><svg class="why-block__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></summary><div class="why-block__body">${innerHtml}</div></details>`;
  });
}

function preprocessCallouts(md) {
  // > [!INFO] body
  // > [!RULE] body
  // > [!WARN] body
  return md.replace(/^> \[!(INFO|RULE|WARN)\]\s+([\s\S]*?)(?=\n\n|\n[^>]|$)/gm, (_, type, body) => {
    const cleanBody = body.split('\n').map(l => l.replace(/^>\s?/, '')).join('\n').trim();
    const inner = marked.parse(cleanBody);
    const cls = type === 'INFO' ? 'callout--info' : (type === 'RULE' ? 'callout--rule' : 'callout--warn');
    return `<aside class="callout ${cls}"><div class="callout__body">${inner}</div></aside>`;
  });
}

function renderMathInElement(el) {
  if (window.renderMathInElement) {
    window.renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      errorColor: '#B53E3E'
    });
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- Lesson loading ---------- */
function findLesson(id) {
  return state.flatLessons.find(l => l.id === id);
}

async function loadFromHash() {
  const hash = window.location.hash.slice(1);
  const match = hash.match(/^lesson-(\d+)/);
  if (match) {
    const id = match[1].padStart(2, '0');
    await loadLesson(id);
  } else {
    renderWelcome();
  }
}

function renderWelcome() {
  state.currentId = null;
  document.getElementById('lessonMeta').hidden = true;
  document.getElementById('lessonPager').innerHTML = '';
  document.getElementById('tocList').innerHTML = '';

  const firstAvailable = state.flatLessons.find(l => l.available);
  const last = localStorage.getItem(STORAGE_KEYS.lastLesson);
  const lastLesson = last ? findLesson(last) : null;
  const continueLesson = (lastLesson && lastLesson.available) ? lastLesson : firstAvailable;

  const content = document.getElementById('lessonContent');
  const progress = loadProgress();
  const total = state.flatLessons.filter(l => l.available).length;
  const done = Object.keys(progress).length;

  content.innerHTML = `
    <section class="welcome">
      <p class="eyebrow">Reader untuk kurikulum personal</p>
      <h1>Belajar Investasi<br>dari Nol</h1>
      <p class="welcome__lede">Dari "inflasi itu apa" sampai bisa menilai sendiri kapan ekonomi sehat dan kapan harus hati-hati. Materi disusun bertahap dalam 5 fase, 30 lesson.</p>
      ${continueLesson ? `
        <a class="welcome__cta" href="#lesson-${continueLesson.id}">
          ${done > 0 ? 'Lanjutkan' : 'Mulai'} dari L${continueLesson.id} · ${escapeHtml(continueLesson.title)}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>` : ''}
      <hr>
      <h2>Tentang reader ini</h2>
      <p>Ini hanya tampilan baca yang lebih nyaman dari file <code>.md</code> di folder ini. Kalau kamu edit isi <code>.md</code>-nya, refresh halaman → langsung berubah.</p>
      <ul>
        <li><strong>Navigasi</strong> — pakai sidebar kiri atau panah Sebelumnya/Berikutnya di akhir lesson.</li>
        <li><strong>Tema</strong> — tombol matahari/bulan di kanan atas, atau ikut sistem.</li>
        <li><strong>Ukuran font</strong> — tombol Aa untuk ganti S/M/L. Pilih yang paling nyaman dibaca.</li>
        <li><strong>Progress</strong> — disimpan otomatis di browser ini. Tidak terkirim ke mana-mana.</li>
      </ul>
      <h2>Cara dipakai</h2>
      <p>Baca lesson sampai habis, kerjakan refleksinya, lalu kabari mentor di chat. Jangan loncat lesson — tiap materi membangun yang berikutnya.</p>
    </section>
  `;
  renderSidebar();
  document.getElementById('reader').focus({ preventScroll: true });
  window.scrollTo({ top: 0 });
}

async function loadLesson(id) {
  const lesson = findLesson(id);
  if (!lesson || !lesson.available) {
    renderWelcome();
    return;
  }

  state.currentId = id;
  localStorage.setItem(STORAGE_KEYS.lastLesson, id);

  const meta = document.getElementById('lessonMeta');
  const title = document.getElementById('lessonTitle');
  const eyebrow = document.getElementById('lessonEyebrow');
  const stats = document.getElementById('lessonStats');
  const content = document.getElementById('lessonContent');

  // Find fase title
  const group = state.lessons.find(g => g.items.some(i => i.id === id));
  eyebrow.textContent = group ? `${group.faseTitle} · Lesson ${parseInt(id, 10)}` : '';
  title.textContent = lesson.title;

  const totalInFase = group ? group.items.length : 0;
  const idxInFase = group ? group.items.findIndex(i => i.id === id) + 1 : 0;
  stats.innerHTML = `
    <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ~${lesson.readTime || 15} menit baca</span>
    <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Lesson ${idxInFase}/${totalInFase} di fase ini</span>
  `;
  meta.hidden = false;

  content.innerHTML = `<p style="color: var(--color-fg-muted);">Memuat lesson…</p>`;

  try {
    const res = await fetch('./' + lesson.file + '?t=' + Date.now());
    if (!res.ok) throw new Error('Failed to fetch ' + lesson.file);
    const md = await res.text();
    const html = renderMarkdown(stripFrontmatter(md));
    content.innerHTML = html;
    renderMathInElement(content);
    buildToc(content);
    renderPager(id);
    markLessonViewed(id);
    document.getElementById('reader').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  } catch (err) {
    content.innerHTML = `<aside class="callout callout--warn"><div class="callout__body"><p><strong>Gagal memuat lesson.</strong></p><p>${escapeHtml(err.message)}</p><p>Pastikan server jalan dan file <code>${escapeHtml(lesson.file)}</code> ada di folder <code>invest/</code>.</p></div></aside>`;
  }
}

function stripFrontmatter(md) {
  // Strip the first H1 + blockquote meta line if present (we render our own header)
  // Pattern: # Title\n\n> meta\n\n---\n\n
  return md.replace(/^#\s+.+\n\n(?:>.*\n)*\n?(?:---\n\n)?/, '');
}

/* ---------- Pager ---------- */
function renderPager(currentId) {
  const idx = state.flatLessons.findIndex(l => l.id === currentId);
  const prev = state.flatLessons[idx - 1];
  const next = state.flatLessons[idx + 1];

  const pager = document.getElementById('lessonPager');
  const prevHtml = prev && prev.available
    ? `<a class="pager-link" href="#lesson-${prev.id}"><span class="pager-link__label">← Sebelumnya</span><span class="pager-link__title">L${prev.id} · ${escapeHtml(prev.title)}</span></a>`
    : `<span class="pager-link pager-link--disabled"><span class="pager-link__label">← Sebelumnya</span><span class="pager-link__title">${prev ? 'Belum tersedia' : 'Awal kurikulum'}</span></span>`;
  const nextHtml = next && next.available
    ? `<a class="pager-link pager-link--next" href="#lesson-${next.id}"><span class="pager-link__label">Selanjutnya →</span><span class="pager-link__title">L${next.id} · ${escapeHtml(next.title)}</span></a>`
    : `<span class="pager-link pager-link--next pager-link--disabled"><span class="pager-link__label">Selanjutnya →</span><span class="pager-link__title">${next ? 'Akan datang' : 'Akhir kurikulum'}</span></span>`;
  pager.innerHTML = prevHtml + nextHtml;
}

/* ---------- TOC ---------- */
function buildToc(contentEl) {
  const tocList = document.getElementById('tocList');
  tocList.innerHTML = '';
  const headings = contentEl.querySelectorAll('h2, h3');
  if (!headings.length) return;

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'h-' + i + '-' + slugify(h.textContent);
    const a = document.createElement('a');
    a.className = 'toc-link toc-link--' + h.tagName.toLowerCase();
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace(/^\d+\.\s*/, '');
    tocList.appendChild(a);
  });

  // Active highlight via IntersectionObserver
  const links = Array.from(tocList.querySelectorAll('.toc-link'));
  const idToLink = new Map(links.map(l => [l.getAttribute('href').slice(1), l]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = idToLink.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-72px 0px -72% 0px', threshold: 0 });
  headings.forEach(h => observer.observe(h));
}

function slugify(s) {
  return s.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 40);
}

/* ---------- Scroll progress ---------- */
function setupScrollProgress() {
  const fill = document.getElementById('scrollProgressFill');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
      ticking = false;
    });
  }, { passive: true });
}
