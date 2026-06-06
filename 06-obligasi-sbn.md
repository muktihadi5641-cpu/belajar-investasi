# Lesson 06 — Obligasi & SBN: Pinjam-meminjam dengan Janji Bunga

> Fase 2 (Mengenal Aset) · Lesson 2 dari 5
> Waktu baca: ~20 menit · Waktu refleksi: ~15 menit

---

## Pertanyaan Pembuka

Bayangkan dua skenario:

**Skenario A**: Tetanggamu, Pak Hadi, datang dan bilang: *"Saya butuh modal warung Rp 50 juta. Kalau kamu mau ikut modal, saya bagi 5% kepemilikan. Kalau untung, kamu dapat bagian. Kalau rugi, kamu juga rugi."*

Itu **saham**. Kamu jadi pemilik, ikut untung-ruginya.

**Skenario B**: Pak Hadi datang lagi dan bilang: *"Saya butuh Rp 50 juta. Pinjamkan ke saya. Saya bayar bunga 8% per tahun (= Rp 4 juta/tahun, dibayar tiap 3 bulan). 3 tahun lagi pokok Rp 50 juta saya balikkan utuh. Untung-rugi warung bukan urusanmu — selama warung bisa bayar, saya bayar."*

Itu **obligasi**. Kamu jadi **kreditur**, bukan pemilik.

Mana yang lebih menarik? Tergantung. Saham punya potensi return lebih tinggi (kalau warung sukses besar) tapi juga risiko lebih tinggi (kalau warung tutup, modalmu hilang). Obligasi punya return moderat dan terprediksi, dengan risiko lebih rendah (selama Pak Hadi tidak default).

Lesson ini akan menjelaskan:

1. Apa itu obligasi — anatomi lengkap
2. Komponen kunci: nominal, kupon, tenor, yield
3. Pemerintah vs korporasi
4. **SBN Ritel Indonesia** (ORI, SBR, SR, ST) — paling penting untuk pemula Indonesia
5. Risiko obligasi (yang tidak sama dengan saham)
6. Posisi obligasi dalam portofolio
7. Hubungan obligasi dengan suku bunga (preview ke Fase 3)

---

## 1. Definisi Proper: Apa Itu Obligasi?

**Obligasi (bond)** = surat utang yang diterbitkan oleh **entitas yang butuh modal** (pemerintah atau perusahaan) kepada **investor yang meminjamkan modal**.

Kalau kamu beli obligasi:

- Kamu **bukan pemilik** entitas itu
- Kamu adalah **kreditur** — entitas itu **berutang ke kamu**
- Entitas itu berjanji bayar **bunga rutin** (kupon) selama masa obligasi
- Di **tanggal jatuh tempo** (maturity), entitas balikin **pokok** (nominal awal) ke kamu

Singkatnya: kamu meminjamkan uang ke pemerintah/perusahaan, dengan kontrak bunga jelas dan jadwal pengembalian.

---

## 2. Anatomi Obligasi — Komponen Kunci

Tiap obligasi punya 5 atribut utama yang harus kamu paham:

### a. Nilai Nominal (Face Value / Par Value)

Jumlah pokok yang akan dikembalikan di jatuh tempo. Biasanya **Rp 1 juta** untuk obligasi ritel Indonesia, atau **Rp 1 miliar** untuk obligasi institusi.

### b. Kupon (Coupon Rate)

Bunga yang dibayar entitas, dinyatakan sebagai **persen per tahun** dari nilai nominal.

Contoh: ORI023 punya kupon **6,1% per tahun**. Pokok Rp 1 juta → bunga $1\,\text{jt} \times 6{,}1\% = \text{Rp}\ 61.000$ per tahun.

Kupon biasanya dibayar tiap bulan/kuartalan, dibagi rata.

### c. Tenor (Maturity)

Berapa lama obligasi berlaku, dari penerbitan sampai jatuh tempo.

Contoh: ORI023 tenornya 3 tahun. Berarti kupon dibayar selama 3 tahun, lalu pokok dikembalikan di akhir tahun ke-3.

### d. Tanggal Jatuh Tempo (Maturity Date)

Tanggal spesifik kapan pokok dibayar balik. Setelah tanggal ini, obligasi "selesai" dan kewajiban entitas terhadap kamu lunas.

### e. Yield (Imbal Hasil)

**Ini agak tricky.** Yield bukan sama dengan kupon, meski sering disama-samakan di obligasi yang baru terbit.

$$
\text{Yield (sederhana)} = \frac{\text{Kupon tahunan}}{\text{Harga pasar saat ini}} \times 100\%
$$

Kapan beda dengan kupon? Saat obligasi diperdagangkan di pasar sekunder dengan harga ≠ nominal.

:::why Kenapa yield bisa beda dengan kupon?
Misal ORI023 punya kupon 6,1%. Pokok Rp 1jt. Bunga tahunan Rp 61.000.

**Saat baru terbit**: harga = Rp 1jt (= nominal). Yield = 61rb / 1jt = **6,1%**. Sama dengan kupon.

**Tapi setahun kemudian**, suku bunga di pasar naik. Investor baru tidak mau beli obligasi lama yang cuma kasih 6,1% kalau obligasi baru kasih 7,5%. Akibatnya, harga obligasi lama TURUN supaya kompetitif. Misalnya jadi Rp 950.000.

Sekarang yield:

$$
\text{Yield} = \frac{61{.}000}{950{.}000} \times 100\% = 6{,}42\%
$$

Yield naik karena harga turun. Tapi kupon-nya tetap **6,1%** dari nominal Rp 1jt.

Jadi:
- **Kupon** = tetap, ditentukan saat penerbitan
- **Yield** = dinamis, tergantung harga pasar

Kalau kamu hold sampai jatuh tempo, yang penting adalah **yield to maturity (YTM)** — perhitungan return total termasuk semua kupon + selisih harga ke nominal di jatuh tempo. Rumus YTM lebih kompleks; akan kita bahas detail nanti kalau perlu.

Untuk pemula: kalau kamu beli **obligasi baru di pasar primer** (saat terbit), kupon = yield. Tidak usah pusing soal ini dulu.
:::

---

## 3. Pemerintah vs Korporasi

Obligasi diterbitkan oleh dua tipe entitas:

### a. Obligasi Pemerintah (Government Bonds / Sovereign Bonds)

Diterbitkan oleh negara. Di Indonesia, ini disebut **SBN (Surat Berharga Negara)**.

- **Risiko gagal bayar (default risk)** sangat rendah, karena pemerintah bisa cetak uang atau naikkan pajak untuk bayar
- **Return** umumnya lebih rendah dari korporasi (premium risiko lebih kecil)
- Di banyak negara, dianggap sebagai **risk-free asset** (asumsi pemerintahnya stabil)

### b. Obligasi Korporasi (Corporate Bonds)

Diterbitkan oleh perusahaan. Misal: PLN, Astra Sedaya Finance, Indofood, dll.

- **Risiko gagal bayar lebih tinggi** dari pemerintah (perusahaan bisa bangkrut)
- **Return lebih tinggi** untuk kompensasi risiko (= "risk premium")
- Ada **credit rating** yang menilai kualitas (idAAA = teratas, idD = default risk tinggi)

### Tingkatan rating (simpel)

| Rating (Pefindo / S&P) | Arti | Risiko |
|----------|------|--------|
| idAAA / AAA | Kualitas tertinggi | Sangat rendah |
| idAA / AA | Kualitas tinggi | Rendah |
| idA / A | Kualitas baik | Sedang-rendah |
| idBBB / BBB | "Investment grade" minimum | Sedang |
| idBB ke bawah | "Speculative / Junk" | Tinggi |

Untuk pemula: **stick dengan rating idAA ke atas**. Junk bonds menawarkan return tinggi tapi risiko default-nya nyata.

---

## 4. SBN Ritel — Cara Paling Mudah Pemula Indonesia Masuk Obligasi

Pemerintah Indonesia menerbitkan obligasi yang **khusus untuk investor ritel** (perorangan). Tidak butuh modal besar, mudah dibeli, aman.

Ada 4 jenis utama:

| Produk | Nama Lengkap | Sifat Kupon | Sifat Syariah |
|--------|--------------|-------------|---------------|
| **ORI** | Obligasi Negara Ritel | **Fixed** (tetap) | Konvensional |
| **SBR** | Savings Bond Ritel | **Floating with floor** (mengambang, ada batas minimum) | Konvensional |
| **SR** | Sukuk Ritel | **Fixed** | Syariah (sesuai prinsip Islam) |
| **ST** | Sukuk Tabungan | **Floating with floor** | Syariah |

### Spesifikasi umum SBN Ritel

- **Minimum pembelian**: Rp 1 juta (sangat terjangkau)
- **Maksimum pembelian**: Rp 2-5 miliar (tergantung seri, biasanya 5 miliar)
- **Tenor**: 2-6 tahun (tergantung seri)
- **Kupon**: dibayar tiap bulan (tanggal 15)
- **Pajak**: 10% final (lebih rendah dari pajak penghasilan biasa)
- **Cara beli**: lewat mitra distribusi (akan dibahas di section 5)

### Beda fundamental ORI vs SBR

**ORI** (kupon fixed):
- Bisa diperdagangkan di pasar sekunder → bisa kamu jual kapan saja sebelum jatuh tempo
- Harga di pasar bisa naik/turun (kalau suku bunga acuan berubah)
- Cocok kalau: kamu mau fleksibilitas + bertaruh suku bunga turun (harga naik = capital gain)

**SBR** (kupon floating with floor):
- **Tidak bisa diperdagangkan** — hanya bisa di-early redemption di periode tertentu (biasanya tahun ke-2)
- Kupon disesuaikan tiap 3 bulan mengikuti BI Rate, dengan **floor** (batas minimum)
- Cocok kalau: kamu tidak butuh cair sebelum jatuh tempo + ingin proteksi kalau BI Rate naik

**SR & ST** sama persis polanya, hanya beda di akad (syariah). Returnnya kompetitif dengan ORI/SBR.

### Contoh konkret

Misal ORI024 terbit tahun 2024 dengan kupon **6,3% fixed**, tenor 3 tahun.

Kamu beli Rp 10 juta:

- **Bunga bulanan**: $10\text{jt} \times 6{,}3\% / 12 = \text{Rp } 52.500/\text{bulan}$ (sebelum pajak)
- **Pajak 10% final**: Rp 5.250 → bunga bersih **Rp 47.250/bulan**
- **3 tahun**: total bunga bersih = $47.250 \times 36 = \text{Rp } 1.701.000$
- **Saat jatuh tempo**: kamu dapat pokok Rp 10 juta balik

Total: investasi Rp 10 juta, dapet Rp 11,7 juta dalam 3 tahun = **return ~5,7% per tahun bersih pajak**.

Bandingkan deposito bank yang ~4-5% (sebelum pajak 20%, jadi ~3-4% bersih). **SBN ritel lebih menarik dari deposito**.

> [!INFO] **Insight kunci untuk pemula:** SBN Ritel adalah **jembatan sempurna** dari tabungan ke investasi. Risiko sangat rendah (pemerintah Indonesia), return jauh lebih baik dari tabungan, minimum modal kecil (Rp 1 juta), pajak rendah (10% final). Banyak investor pemula Indonesia start dari sini.

---

## 5. Cara Beli SBN Ritel

Beli SBN ritel **tidak bisa langsung ke pemerintah**. Harus lewat **mitra distribusi** yang ditunjuk Kementerian Keuangan.

Daftar mitra distribusi umum (per 2024-2025):

| Bank | Fintech |
|------|---------|
| BCA, BRI, Mandiri, BNI, BTN | Bibit, Bareksa |
| Bank Permata, CIMB Niaga, dll | Pluang, Tanamduit, Investree |
| | DANA (kerjasama Bareksa) |

### Step-by-step (umum)

1. **Daftar akun** di mitra distribusi pilihan (download app, KYC pakai KTP+NPWP)
2. **Tunggu periode penawaran** — SBN Ritel terbit periodik, biasanya 2-3 bulan sekali. Cek calendar di Kemenkeu atau aplikasi mitra
3. **Pesan saat periode penawaran buka** — pilih nominal (kelipatan Rp 1 juta), konfirmasi
4. **Transfer dana** ke rekening yang ditentukan dalam 1-3 hari
5. **Setelmen** — kamu dapat bukti kepemilikan elektronik
6. **Bunga otomatis masuk** ke rekening bankmu tanggal 15 tiap bulan
7. **Jatuh tempo**: pokok otomatis masuk balik

### Tips operasional

- **Set reminder** untuk periode penawaran. Penjualan SBN ritel bisa habis cepat kalau populer
- **Pakai mitra dengan biaya rendah** — Bibit, Bareksa, dan beberapa bank biasanya tidak charge biaya transaksi tambahan
- **Diversifikasi seri** kalau modalmu cukup — punya 2-3 seri yang jatuh tempo bertahap (laddering)

---

## 6. Risiko Obligasi

Obligasi sering disebut "aman", tapi **ada risiko yang tidak ada di saham**. Penting kamu paham:

### a. Credit / Default Risk

Risiko entitas tidak bayar bunga atau tidak bayar pokok di jatuh tempo.

- **SBN Indonesia**: sangat rendah, tidak pernah default sejak Reformasi
- **Korporasi rating tinggi**: rendah
- **Junk bonds**: nyata

### b. Interest Rate Risk

Risiko suku bunga acuan naik, bikin obligasi yang sudah kamu pegang turun harganya di pasar sekunder.

Berlaku hanya kalau kamu **mau jual sebelum jatuh tempo**. Kalau hold sampai jatuh tempo, kamu tetap dapat kupon + pokok sesuai kontrak.

### c. Inflation Risk

Kalau inflasi naik melebihi kupon, **real return** kamu negatif (recap Lesson 01).

Contoh: SBN kupon 6%, inflasi 7% → real return = -1%. Kamu rugi daya beli.

Ini risiko utama obligasi jangka panjang di periode inflasi tinggi (seperti US 1970-an, atau Indonesia 1998).

### d. Liquidity Risk

Obligasi yang tidak bisa diperdagangkan (SBR, ST) atau yang volumenya kecil di pasar sekunder, susah dijual cepat kalau kamu butuh cash mendadak.

Solusi: **jangan masukkan dana darurat ke obligasi**. Dana darurat tetap di tabungan.

### e. Reinvestment Risk (advanced)

Kupon yang kamu terima tiap bulan, kalau kamu reinvestasikan, akan dapat suku bunga sesuai kondisi pasar saat itu — yang mungkin lebih rendah dari kupon obligasi awal.

Risiko ini halus tapi penting untuk obligasi tenor panjang.

---

## 7. Hubungan Obligasi dengan Suku Bunga (Preview ke Fase 3)

Ini konsep penting yang akan dibahas detail di Fase 3:

> [!RULE] **Hubungan kebalik**: harga obligasi dan suku bunga acuan bergerak **berlawanan**. Suku bunga naik → harga obligasi (di pasar sekunder) turun. Suku bunga turun → harga obligasi naik.

Logika sederhana: kalau ada obligasi lama dengan kupon 6%, dan sekarang BI Rate naik bikin obligasi baru kupon 8%, **siapa mau beli obligasi lama di harga penuh?** Tidak ada. Jadi harga obligasi lama harus turun supaya yield-nya kompetitif.

Implikasi praktis:

- **Suku bunga rendah → harga obligasi tinggi → bad time to buy, good time to sell**
- **Suku bunga tinggi → harga obligasi rendah → good time to buy, good time to lock in high coupons**
- Periode "suku bunga akan naik" (= BI ketat) = obligasi panjang berisiko, obligasi pendek lebih aman
- Periode "suku bunga akan turun" (= BI longgar) = obligasi panjang menguntungkan, bisa untung dari capital gain

Detail ini akan dibongkar di **Lesson 13 — Yield Curve & Pasar Obligasi** di Fase 3.

---

## 8. Posisi Obligasi dalam Portofolio

Saham = mesin growth. Obligasi = **stabilizer**.

Peran obligasi di portofolio:

1. **Mengurangi volatilitas keseluruhan** — saat saham turun 30%, obligasi biasanya tidak ikut turun se-dalam itu (kadang malah naik kalau resesi → BI Rate turun)
2. **Income reguler** — kupon bulanan jadi cashflow predictable
3. **Modal preservation** — untuk tujuan jangka pendek-menengah, obligasi melindungi nilai
4. **"Dry powder"** — saat market saham crash, kamu bisa jual obligasi (yang mungkin tidak ikut crash) untuk beli saham di harga murah

### Komposisi tipikal (rule of thumb)

Recap dari Lesson 05: `Persen saham ≈ 100 − usia`

Sisanya umumnya di obligasi (dan sedikit cash):

| Usia | Saham | Obligasi | Cash |
|------|-------|----------|------|
| 20-an | 70-80% | 15-25% | 5-10% |
| 30-an | 60-70% | 25-35% | 5-10% |
| 40-an | 50-60% | 35-45% | 5-10% |
| 50-an | 40-50% | 45-55% | 5-10% |
| 60+ | 30-40% | 50-60% | 10-15% |

Ini cuma kerangka. Sesuaikan dengan **tujuan + risk tolerance + horizon** (recap Lesson 03 + 04).

---

## 9. Ringkasan Lesson 06

- **Obligasi = surat utang**. Kamu jadi kreditur entitas penerbit, bukan pemilik
- 5 komponen kunci: **nominal, kupon, tenor, jatuh tempo, yield**
- **Kupon = tetap saat terbit** (atau floating mengikuti acuan). **Yield = dinamis**, tergantung harga pasar
- **Pemerintah (SBN)** = risiko terendah, return moderat. **Korporasi** = risiko lebih tinggi, return premium
- **SBN Ritel Indonesia**: ORI, SBR, SR, ST. Modal mulai Rp 1 juta, kupon ~5-7%, pajak 10% final, lebih bagus dari deposito
- Beli SBN ritel via **mitra distribusi** (bank atau fintech: Bibit, Bareksa, dll)
- Risiko obligasi: **credit, interest rate, inflation, liquidity, reinvestment**
- **Harga obligasi vs suku bunga = kebalik**. Suku bunga naik → harga turun
- Posisi di portofolio: **stabilizer**. Mengurangi volatilitas, kasih income, melindungi modal
- Komposisi tipikal: usia muda saham banyak obligasi sedikit; usia lanjut sebaliknya

---

## Refleksi (kerjakan sebelum lanjut ke L07)

1. **Konsep dasar.** Jelaskan dengan kata-katamu sendiri, **bedanya saham dan obligasi**. Pakai analogi warung Pak Hadi kalau membantu. Fokus pada: posisimu sebagai investor (pemilik vs kreditur), sumber return, dan urutan klaim kalau bangkrut.

2. **Hitungan SBN.** Kalau kamu beli **ORI dengan kupon 6,5% fixed**, **Rp 5 juta**, **tenor 3 tahun**:
   - Bunga bulanan (sebelum pajak)?
   - Bunga bulanan (setelah pajak 10%)?
   - Total return bersih setelah 3 tahun?
   - Berapa persen return per tahun bersih?
   - Bandingkan dengan deposito 5%/tahun (pajak 20%) — mana lebih menarik?

3. **Posisi obligasi pribadi.** Lihat tabel komposisi tipikal di section 8. Usia 22, kira-kira berapa % yang masuk akal untukmu di obligasi sekarang? Pertimbangkan: kamu masih kuliah, belum punya income tetap. **Pertanyaan tricky**: apakah masuk akal kamu mulai SBN ritel sekarang, atau lebih baik fokus dulu ke dana darurat? Argumentasikan jawabanmu.

4. **Hubungan suku bunga.** Skenario: kamu pegang obligasi tenor 5 tahun kupon 6%. Tiba-tiba BI Rate naik dari 5,75% ke 7%. Apa yang terjadi pada **harga obligasimu di pasar sekunder**? Apa yang terjadi pada **bunga yang kamu terima tiap bulan**? Apakah kamu rugi atau tidak?

---

## Selanjutnya

**Lesson 07 — Reksadana & ETF: Paket Aset Jadi**

Sekarang kamu paham saham dan obligasi individual. Tapi mengelola portofolio sendiri (pilih saham/obligasi satu-satu) butuh waktu dan pengetahuan. Untuk yang ingin **start simpel** atau modal kecil tapi tetap diversifikasi, ada solusi: **reksadana** dan **ETF** — paket aset yang sudah dikelola profesional atau dirancang mengikuti indeks. Pemahaman ini akan membuka pilihan investasi paling praktis untuk pemula Indonesia.
