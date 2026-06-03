# Belajar Jadi Investor — Dari Nol Sampai Bisa Analisis Sendiri

Ruang belajar pribadi untuk menjadi investor yang **mengerti apa yang sedang terjadi di ekonomi**, bukan ikut-ikutan beli karena viral.

**📖 Baca langsung di browser:** https://muktihadi5641-cpu.github.io/belajar-investasi/

## Isi

- **[roadmap.md](roadmap.md)** — peta kurikulum lengkap (30 lesson dalam 5 fase)
- **Lesson** — file `XX-judul.md` (saat ini L01–L03 siap)
- **Web reader** — `index.html` + `app.js` + `styles.css` + `lessons.js`. Dirancang khusus untuk reading comfort: typography Fraunces/Inter, math KaTeX, light/dark, progress tracking

## Filosofi Mentoring

- **Tidak pakai jargon tanpa dijelaskan.** Setiap istilah baru dibuka definisinya
- **Contoh selalu dari kehidupan sehari-hari** dulu, baru ke pasar saham
- **Indonesia dulu, baru global.** Pakai konteks lokal supaya relate, baru naik ke pasar US
- **Bertahap.** Bisa baca laporan keuangan bukan tujuan minggu pertama
- **Tidak ada "rekomendasi saham".** Yang dilatih adalah cara berpikir, bukan kasih tahu apa yang dibeli

## Jalankan Lokal

Kalau mau baca offline atau development:

```powershell
# Windows
.\start-reader.bat
```

Atau manual:

```powershell
python -m http.server 8765 --bind 0.0.0.0
# Buka http://localhost:8765/
```

## Status Belajar

- Mulai: 2026-06-01
- Fase aktif: **Fase 1 — Fondasi Mindset**
- Lesson terbaru: [01-inflasi-daya-beli.md](01-inflasi-daya-beli.md)

## Custom Markdown Syntax

Selain GFM standar, reader mendukung:

````markdown
$$ FV = PV \times (1+r)^n $$         # block math (KaTeX)
$x$                                   # inline math

:::why Judul collapsible
Penjelasan detail di sini...
:::

> [!INFO] Highlight informasional
> [!RULE] Aturan/prinsip
> [!WARN] Peringatan
````
