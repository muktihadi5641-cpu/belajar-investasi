# Web Reader

Web reader untuk kurikulum belajar investasi di folder ini. Single-page app vanilla (HTML/CSS/JS), tanpa build step.

## Cara Menjalankan

Dari folder `invest/`:

**Windows (paling mudah):** klik dua kali `start-reader.bat`.

**Manual (PowerShell/cmd):**
```powershell
python -m http.server 8765
```
Lalu buka [http://localhost:8765/web/](http://localhost:8765/web/) di browser.

## Cara Menambah Lesson Baru

1. Tulis file lesson baru di folder `invest/` dengan nama `XX-slug.md` (contoh: `04-time-horizon.md`)
2. Buka [lessons.js](lessons.js), set `available: true` di entry lesson tersebut
3. Refresh halaman reader — lesson otomatis muncul di sidebar

## Custom Markdown Syntax

Selain markdown standar (GFM), reader mendukung:

**Math (LaTeX via KaTeX):**
```
Inline: $FV = PV \times (1+r)^n$

Block:
$$
FV = PV \times \left[ \frac{(1+r)^n - 1}{r} \right]
$$
```

**Why-this-works (collapsible explanation):**
````
:::why Kenapa ada -1 di rumus annuity?
Penjelasan detail di sini... bisa multi-paragraph, list, math, dll.
:::
````

**Callouts:**
```
> [!INFO] Konsep baru: real return = nominal − inflasi.
> [!RULE] Hindari rugi besar lebih penting dari mengejar untung besar.
> [!WARN] Jangan investasi pakai uang panas (pinjaman/KPR).
```

## Stack

- `marked@12` — Markdown parsing
- `KaTeX@0.16` — Math rendering
- `Fraunces` (heading) + `Inter` (body) + `JetBrains Mono` (code/math) via Google Fonts
- Vanilla JS, no framework, no bundler
