/* Daftar lesson kurikulum.
   Edit di sini untuk menambah lesson baru ketika file MD-nya sudah ada. */
window.LESSONS = [
  {
    fase: 1,
    faseTitle: 'Fase 1 — Fondasi Mindset',
    items: [
      { id: '01', file: '01-inflasi-daya-beli.md',   title: 'Inflasi & Daya Beli', available: true,  readTime: 15 },
      { id: '02', file: '02-compounding.md',         title: 'Compounding',         available: true,  readTime: 15 },
      { id: '03', file: '03-risk-vs-return.md',      title: 'Risk vs Return',      available: true,  readTime: 18 },
      { id: '04', file: '04-time-horizon.md',        title: 'Time Horizon & Tujuan Keuangan', available: true,  readTime: 16 }
    ]
  },
  {
    fase: 2,
    faseTitle: 'Fase 2 — Mengenal Aset',
    items: [
      { id: '05', file: '05-saham.md',         title: 'Saham',                       available: true,  readTime: 22 },
      { id: '06', file: '06-obligasi-sbn.md',  title: 'Obligasi & SBN',              available: true,  readTime: 20 },
      { id: '07', file: '07-reksadana-etf.md', title: 'Reksadana & ETF',             available: false },
      { id: '08', file: '08-properti-emas-crypto.md', title: 'Properti, Emas, Crypto', available: false },
      { id: '09', file: '09-diversifikasi.md', title: 'Diversifikasi & Alokasi Aset',available: false }
    ]
  },
  {
    fase: 3,
    faseTitle: 'Fase 3 — Membaca Ekonomi Makro',
    items: [
      { id: '10', file: '10-siklus-ekonomi.md',         title: 'Siklus Ekonomi',                       available: false },
      { id: '11', file: '11-gdp-inflasi-suku-bunga.md', title: 'GDP, Inflasi, Suku Bunga',             available: false },
      { id: '12', file: '12-bank-sentral.md',           title: 'Bank Sentral (Fed & BI)',              available: false },
      { id: '13', file: '13-yield-curve.md',            title: 'Yield Curve & Pasar Obligasi',         available: false },
      { id: '14', file: '14-leading-lagging.md',        title: 'Indikator Leading vs Lagging',         available: false },
      { id: '15', file: '15-rezim-pasar.md',            title: 'Rezim Pasar',                          available: false }
    ]
  },
  {
    fase: 4,
    faseTitle: 'Fase 4 — Analisis Saham',
    items: [
      { id: '16', file: '16-laporan-keuangan.md',    title: 'Membaca Laporan Keuangan', available: false },
      { id: '17', file: '17-rasio-fundamental.md',   title: 'Rasio Fundamental',         available: false },
      { id: '18', file: '18-moat-kualitas.md',       title: 'Kualitas Bisnis & Moat',    available: false },
      { id: '19', file: '19-valuasi.md',             title: 'Valuasi',                   available: false },
      { id: '20', file: '20-teknikal-pengenalan.md', title: 'Pengenalan Analisis Teknikal', available: false },
      { id: '21', file: '21-trend-sr-ma.md',         title: 'Trend, Support/Resistance, MA', available: false },
      { id: '22', file: '22-volume-momentum.md',     title: 'Volume & Momentum',          available: false },
      { id: '23', file: '23-vcp-breakout.md',        title: 'Pattern: VCP & Breakout',    available: false }
    ]
  },
  {
    fase: 5,
    faseTitle: 'Fase 5 — Strategi & Praktik',
    items: [
      { id: '24', file: '24-filosofi-legenda.md',     title: 'Filosofi Investor Legendaris', available: false },
      { id: '25', file: '25-watchlist.md',            title: 'Membangun Watchlist',          available: false },
      { id: '26', file: '26-position-sizing.md',      title: 'Position Sizing & Risk Mgmt',  available: false },
      { id: '27', file: '27-journal.md',              title: 'Trading Journal',              available: false },
      { id: '28', file: '28-studi-kasus.md',          title: 'Studi Kasus Historis',         available: false },
      { id: '29', file: '29-portofolio-pertama.md',   title: 'Membangun Portofolio Pertama', available: false },
      { id: '30', file: '30-rebalancing.md',          title: 'Maintenance & Rebalancing',    available: false }
    ]
  }
];
