# Lesson 02 — Compounding: Kenapa Mulai Sekarang Lebih Penting dari Mulai Banyak

> Fase 1 (Fondasi Mindset) · Lesson 2 dari 4
> Waktu baca: ~20 menit · Waktu refleksi: ~15 menit

---

## Pertanyaan Pembuka

Ada dua orang: **Andi** dan **Budi**. Keduanya pingin pensiun di usia 65 dengan duit banyak.

- **Andi** mulai investasi di usia **25**. Setor Rp 1 juta/bulan selama **10 tahun**, lalu **berhenti total** (tidak setor lagi). Uangnya dibiarkan tumbuh sampai usia 65.
- **Budi** baru sadar di usia **35**. Setor Rp 1 juta/bulan **terus-menerus** sampai usia 65 — totalnya **30 tahun**.

Pertanyaan: siapa yang lebih kaya di usia 65? Asumsikan keduanya dapat return 10% per tahun.

Logika polos: Budi pasti menang. Dia nabung lebih lama, totalnya lebih banyak (Rp 360 juta vs Rp 120 juta — **3x lebih banyak**).

Tapi jawabannya: **Andi menang**. Padahal duit yang dia setor jauh lebih sedikit.

Lesson ini akan menjelaskan kenapa, lewat satu konsep yang dijuluki "keajaiban dunia kedelapan" oleh Einstein:

**Compounding** — atau bahasa Indonesia: **bunga berbunga**.

---

## 1. Apa Itu Compounding?

Compounding terjadi waktu **bunga yang kamu dapatkan ikut dibungakan lagi** di periode berikutnya. Bukan cuma uang pokok yang menghasilkan, tapi juga hasil yang sudah didapat.

### Linear vs Compound

Bayangkan dua skenario:

**Skenario A — Bunga sederhana (simple interest):**
Setor Rp 10 juta, dapat bunga Rp 1 juta/tahun. Bunganya ditarik tiap tahun.

- Tahun 1: 10jt → +1jt → ditarik
- Tahun 2: 10jt → +1jt → ditarik
- Tahun 30: total bunga = 30 juta
- Akhir: pokok 10jt + bunga 30jt = **Rp 40 juta**

**Skenario B — Bunga berbunga (compound):**
Setor Rp 10 juta, dapat bunga 10%/tahun. Bunganya **tidak ditarik**, dibiarkan ikut bekerja.

- Tahun 1: 10jt → 11jt (bunga 1jt)
- Tahun 2: 11jt → 12,1jt (bunga 1,1jt — sedikit lebih banyak!)
- Tahun 10: 25,9jt
- Tahun 20: 67,3jt
- Tahun 30: **Rp 174,5 juta**

Selisihnya: **Rp 134,5 juta** dengan setoran awal yang sama. Bedanya cuma: **bunga dibiarkan bekerja**.

### Rumus Compounding (yang harus kamu ingat)

$$
FV = PV \times (1 + r)^n
$$

Artinya:

- $PV$ (Present Value) = uang sekarang
- $r$ = return per tahun (dalam desimal — 10% = 0.10)
- $n$ = jumlah tahun
- $FV$ (Future Value) = uang di masa depan

Contoh: Rp 10 juta di-compounding 10%/tahun selama 30 tahun:

$$
\begin{aligned}
FV &= 10\,\text{jt} \times (1{,}10)^{30} \\
   &= 10\,\text{jt} \times 17{,}45 \\
   &= \text{Rp}\ 174{,}5\ \text{juta}
\end{aligned}
$$

Kuncinya ada di **pangkat $n$**. Itulah yang bikin pertumbuhan jadi **eksponensial**, bukan linear.

:::why Kenapa pertumbuhan eksponensial, bukan linear?
Bayangkan Rp 100 di-compounding 10%.

**Tahun 1**: 100 + (10% × 100) = 100 + 10 = **110**. Bunga didapat: 10.

**Tahun 2**: bunga dihitung dari saldo baru (110), bukan dari pokok awal. Jadi: 110 + (10% × 110) = 110 + 11 = **121**. Bunga didapat: 11 (bukan 10 lagi).

**Tahun 3**: 121 + (10% × 121) = **133,1**. Bunga: 12,1.

Bunga tahun ini selalu lebih besar dari tahun lalu, karena dasarnya (saldo) makin besar. Jadi bukan "100, 110, 120, 130" (tambah 10 terus), tapi "100, 110, 121, 133, 146, ...". Kelihatan kecil di awal, tapi makin lama makin **melaju**.

Pangkat $n$ di rumus itulah yang merepresentasikan "bunga didapat di atas bunga" sebanyak $n$ kali.
:::

---

## 2. Kembali ke Andi vs Budi

Sekarang kita hitung pelan-pelan. Tapi ada satu rumus baru yang muncul di sini — dan ini yang sering bikin pemula bingung. Saya akan bongkar pelan-pelan.

### Rumus untuk Setoran Bertahap (Annuity)

Kalau kamu setor **sekali doang** lalu didiamkan → pakai rumus simple compound: $FV = PV \times (1+r)^n$.

Tapi kalau kamu setor **rutin tiap tahun** (atau tiap bulan), perlu rumus berbeda — namanya **Future Value of Annuity**:

$$
FV = PMT \times \left[ \frac{(1+r)^n - 1}{r} \right]
$$

Dimana:

- $PMT$ (Payment) = setoran rutin tiap periode
- $r$ = return per periode
- $n$ = jumlah periode setoran

:::why Kenapa ada "−1" di rumus annuity? (PENTING — bongkar pelan)
Ini bagian yang sering bikin pusing. Mari saya bongkar dari nol.

**Asumsi setting**: kamu setor $PMT$ di **akhir tiap tahun**, return $r$/tahun, selama $n$ tahun.

**Langkah 1 — Lacak masing-masing setoran:**

- Setoran tahun ke-1 punya waktu compounding selama $(n-1)$ tahun → tumbuh jadi $PMT \times (1+r)^{n-1}$
- Setoran tahun ke-2 punya waktu $(n-2)$ tahun → tumbuh jadi $PMT \times (1+r)^{n-2}$
- ...
- Setoran tahun ke-$(n-1)$ punya waktu 1 tahun → $PMT \times (1+r)^1$
- Setoran tahun ke-$n$ baru saja masuk → $PMT \times (1+r)^0 = PMT$

**Langkah 2 — Jumlahkan semuanya:**

$$
FV = PMT \times \left[ (1+r)^{n-1} + (1+r)^{n-2} + \cdots + (1+r)^1 + 1 \right]
$$

Bagian dalam kurung adalah **deret geometri** dengan:
- Suku pertama = 1
- Rasio = $(1+r)$
- Jumlah suku = $n$

**Langkah 3 — Pakai rumus deret geometri:**

Dari pelajaran SMA, jumlah deret geometri:

$$
1 + x + x^2 + \cdots + x^{n-1} = \frac{x^n - 1}{x - 1}
$$

Ganti $x$ dengan $(1+r)$:

$$
\frac{(1+r)^n - 1}{(1+r) - 1} = \frac{(1+r)^n - 1}{r}
$$

**Langkah 4 — Substitusi balik:**

$$
FV = PMT \times \frac{(1+r)^n - 1}{r}
$$

**Jadi "−1" dari mana?** Dari rumus deret geometri di Langkah 3. Itu bukan trik finansial — itu matematika murni dari penjumlahan deret.

**Intuisi singkat tanpa rumus:** kalau $n$ setoran, di pikiran kita "tinggal kalikan PMT dengan $(1+r)^n$". Tapi tidak boleh, karena tiap setoran masuk di tahun berbeda, jadi compounding-nya berbeda-beda. "−1" adalah koreksi matematis untuk mengakomodasi fakta bahwa setoran terakhir (tahun ke-$n$) belum sempat dibungakan sama sekali.
:::

### Hitungan Andi (mulai usia 25, nabung 10 tahun lalu berhenti)

Setor Rp 12 juta/tahun (Rp 1jt × 12) selama 10 tahun. Di akhir tahun ke-10 (usia 35), totalnya:

$$
\begin{aligned}
FV_{35} &= 12\,\text{jt} \times \frac{(1{,}10)^{10} - 1}{0{,}10} \\[4pt]
        &= 12\,\text{jt} \times \frac{1{,}5937}{0{,}10} \\[4pt]
        &= 12\,\text{jt} \times 15{,}937 \\[4pt]
        &= \text{Rp}\ 191\ \text{juta}
\end{aligned}
$$

Lalu Andi **berhenti setor**, tapi uangnya tetap di pasar dan tumbuh 10%/tahun selama 30 tahun lagi (usia 35 → 65). Sekarang pakai rumus simple compound:

$$
\begin{aligned}
FV_{65} &= 191\,\text{jt} \times (1{,}10)^{30} \\
        &= 191\,\text{jt} \times 17{,}45 \\
        &= \text{Rp}\ 3{,}33\ \text{miliar}
\end{aligned}
$$

Total uang yang dia setor seumur hidup: **Rp 120 juta**.

### Hitungan Budi (mulai usia 35, nabung 30 tahun nonstop)

Setor Rp 12 juta/tahun selama 30 tahun:

$$
\begin{aligned}
FV_{65} &= 12\,\text{jt} \times \frac{(1{,}10)^{30} - 1}{0{,}10} \\[4pt]
        &= 12\,\text{jt} \times 164{,}49 \\
        &= \text{Rp}\ 1{,}97\ \text{miliar}
\end{aligned}
$$

Total uang yang dia setor seumur hidup: **Rp 360 juta**.

### Hasil akhir

| | Andi | Budi |
|---|---|---|
| Total setor seumur hidup | Rp 120 juta | Rp 360 juta |
| Saldo di usia 65 | **Rp 3,33 miliar** | Rp 1,97 miliar |
| Selisih | **+Rp 1,36 miliar** | |

Andi menang **Rp 1,36 miliar** padahal nabungnya **3x lebih sedikit**.

### Kenapa bisa begitu?

Karena Andi **memberi uangnya waktu lebih lama untuk berbunga-berbunga**. 10 tahun ekstra di awal (usia 25–35) itu di-compounding selama 30 tahun lagi.

Yang menang bukan **jumlah uang**, tapi **jumlah tahun**.

> [!RULE] **Hukum compounding:** waktu adalah variabel paling kuat dalam rumus $(1+r)^n$. Menambah $n$ jauh lebih murah dari menambah $PV$.

---

## 3. Rule of 72 — Hitungan Cepat untuk Investor

Mau tahu berapa lama uangmu **dobel** di return tertentu? Pakai rumus mental:

$$
\text{Tahun untuk dobel} \approx \frac{72}{r \times 100}
$$

| Return per tahun | Tahun untuk uang dobel |
|------------------|-----------------------|
| 1% (tabungan bank) | 72 tahun |
| 4% (deposito) | 18 tahun |
| 7% (obligasi/SBN) | ~10 tahun |
| 10% (saham rata-rata) | ~7 tahun |
| 12% (saham bagus / IHSG historis) | 6 tahun |
| 15% (saham bagus) | ~5 tahun |
| 20% (sangat agresif) | ~3,6 tahun |

:::why Kenapa angka 72? Bukan 70 atau 75?
Rumus eksak untuk waktu dobel adalah:

$$
n = \frac{\ln 2}{\ln(1+r)} \approx \frac{0{,}693}{r}
$$

(memakai aproximasi $\ln(1+r) \approx r$ untuk $r$ kecil)

Jadi pembilang seharusnya **0,693** atau **69,3**, bukan 72.

**Tapi 72 dipilih karena lebih praktis:**

1. **Mudah dibagi**: 72 punya banyak faktor (1, 2, 3, 4, 6, 8, 9, 12, ...) — bisa dibagi rapi dengan return 4%, 6%, 8%, 9%, 12%, dst.
2. **Lebih akurat di range return investasi normal** (6–10%): di range itu, $\ln(1+r)$ memang sedikit lebih kecil dari $r$, jadi pembilang efektif jadi sedikit lebih besar dari 69. Angka 72 mengkompensasi pembulatan ini cukup baik.
3. **Hitungan mental cepat**: 72 ÷ 8% = 9 tahun. Coba 69,3 ÷ 8% = 8,66 tahun. Yang mana lebih gampang di kepala?

Akurat: untuk return 8%, waktu dobel sebenarnya 9,006 tahun. Rule of 72 bilang 9 tahun. Selisih 0,006 tahun = 2 hari. Tidak penting untuk perencanaan.
:::

Implikasi praktis:

- Uang di tabungan bank butuh **seumur hidup** untuk dobel (dan inflasi sudah membunuhnya jauh sebelum itu)
- Uang di saham bagus bisa dobel **5x dalam 25 tahun** (1 → 2 → 4 → 8 → 16 → 32x)

### Contoh konkret

Rp 50 juta di-compounding 10%/tahun selama 35 tahun:

- 7 tahun → Rp 100 juta
- 14 tahun → Rp 200 juta
- 21 tahun → Rp 400 juta
- 28 tahun → Rp 800 juta
- 35 tahun → **Rp 1,6 miliar**

Dari Rp 50 juta. Tanpa setor lagi. Cuma waktu.

---

## 4. "Tapi Bunga Bank 4% Juga Compounding, Kan?"

Secara teknis: ya. Bunga deposito 4% di-compounding tiap tahun juga eksponensial. Tapi **inflasi juga eksponensial**, dan kalau inflasi > return, kamu compounding **ke arah miskin**.

Ingat dari Lesson 01:

- Tabungan: ~1% per tahun → nominal naik 1%, daya beli **turun ~3% per tahun**
- Deposito: ~4% per tahun → nominal naik 4%, daya beli **kurang lebih flat** (tidak bertambah)
- Saham: ~10% per tahun → nominal naik 10%, daya beli **naik ~6% per tahun**

Yang penting bukan **nominal return**, tapi **real return**:

$$
r_{\text{riil}} \approx r_{\text{nominal}} - r_{\text{inflasi}}
$$

(rumus aproximasi; rumus eksak adalah Fisher equation, akan dibahas di Lesson 11)

| Aset | Nominal Return | Inflasi | **Real Return** |
|------|----------------|---------|-----------------|
| Tabungan | 1% | 4% | **−3%** ← compounding ke bawah |
| Deposito | 4% | 4% | **0%** ← jalan di tempat |
| Obligasi/SBN | 7% | 4% | **+3%** |
| Saham (rata-rata) | 10% | 4% | **+6%** |

Inilah kenapa investor seriusnya pakai saham/obligasi/aset produktif, bukan tabungan/deposito sebagai **mesin** compounding utama. Tabungan/deposito punya fungsi lain (akan dibahas: dana darurat).

---

## 5. Cost of Delay — Harga Sebuah Penundaan

Setiap tahun yang kamu tunda mulai investasi punya **biaya tersembunyi**: kamu kehilangan **satu siklus compounding di ujung**.

### Simulasi: setor Rp 1jt/bulan sampai usia 60, return 10%

| Mulai usia | Tahun setor | Total setor | Saldo di usia 60 |
|-----------|------------|-------------|------------------|
| 20 | 40 | Rp 480 jt | **Rp 6,32 miliar** |
| 25 | 35 | Rp 420 jt | Rp 3,89 miliar |
| 30 | 30 | Rp 360 jt | Rp 2,37 miliar |
| 35 | 25 | Rp 300 jt | Rp 1,43 miliar |
| 40 | 20 | Rp 240 jt | Rp 836 jt |
| 45 | 15 | Rp 180 jt | Rp 477 jt |

Tunda 5 tahun dari usia 20 ke 25 = **kehilangan Rp 2,4 miliar di akhir**.

Tunda 10 tahun dari usia 20 ke 30 = **kehilangan Rp 4 miliar**.

Total yang ditunda nabung: Rp 60 jt (5 tahun) atau Rp 120 jt (10 tahun). Tapi hilangnya di akhir miliar-an. **Karena setiap rupiah yang masuk lebih awal punya waktu lebih banyak buat di-compounding.**

> [!INFO] **Insight ekonomi yang harus internalized:** Waktu adalah aset paling berharga yang dimiliki investor muda — dan satu-satunya yang tidak bisa dibeli kembali.

---

## 6. Compounding di Dunia Nyata: Cerita Warren Buffett

Warren Buffett — investor paling terkenal sepanjang sejarah — punya kekayaan ~$130 miliar. Tapi yang menarik:

- 99% kekayaannya **dia dapat setelah usia 50**
- Dia mulai investasi serius di usia **11**
- Kekayaannya bukan hasil "menang besar sekali" — hasil compounding ~20%/tahun selama **80 tahun**

Buffett sendiri pernah bilang: *"Trick utama dalam hidup saya bukan kepintaran investasi. Trick utama saya adalah hidup lama dan mulai sangat awal."*

Pelajaran: kamu **tidak perlu jadi genius**. Kamu cuma perlu **mulai, konsisten, dan kasih waktu**.

---

## 7. Ringkasan Lesson 02

- **Compounding** = bunga yang kamu dapat ikut dibungakan lagi → pertumbuhan eksponensial, bukan linear
- Rumus simple compound: $FV = PV \times (1+r)^n$. Variabel paling powerful adalah $n$ (waktu)
- Rumus annuity (setoran bertahap): $FV = PMT \times \frac{(1+r)^n - 1}{r}$ — "−1" datang dari rumus deret geometri, bukan sihir finansial
- **Waktu > jumlah**: Andi (nabung 10 tahun) kalahkan Budi (nabung 30 tahun) cuma karena mulai 10 tahun lebih awal
- **Rule of 72**: bagi 72 dengan return %-mu untuk tahu berapa tahun uang dobel. Angka 72 dipilih karena mudah dibagi
- Yang penting: **real return** (setelah dikurangi inflasi), bukan nominal
- **Cost of delay**: tunda 5 tahun di awal bisa hilang miliaran di ujung
- Buffett: 99% kekayaan setelah usia 50, hasil compounding 80 tahun

---

## Refleksi (kerjakan sebelum lanjut)

1. **Cost of delay pribadi.** Berapa usiamu sekarang? Pakai tabel "Cost of Delay" di atas — kalau kamu mulai sekarang (Rp 1jt/bulan, return 10%) sampai usia 60, kira-kira saldo akhirmu berapa? Bandingkan dengan kalau kamu mulai 5 tahun lalu.

2. **Hitungan mental Rule of 72.** Kalau Indonesia rata-rata return saham 12%/tahun, berapa tahun uangmu dobel di IHSG? Berapa tahun untuk **lipat 8** (dobel 3x)?

3. **Soal cerita.** Bayangkan kamu menang lotre Rp 100 juta hari ini. Dua pilihan:
   - (a) Pakai sekarang untuk DP rumah
   - (b) Investasi di saham, return rata-rata 10%/tahun, ambil 30 tahun lagi
   
   Berapa nilai (b) di tahun ke-30? Apakah pilihan ini *secara matematika* lebih baik? Apakah ada faktor non-matematika yang bisa membuat (a) tetap pilihan lebih baik? (Tidak ada jawaban benar/salah — saya pingin lihat cara kamu mikirnya.)

4. **Pertanyaan terbuka.** Setelah baca lesson ini, apa yang bikin kamu **kesel sama diri sendiri** (kalau ada)? Dan apa yang bikin kamu **excited**?

---

## Selanjutnya

**Lesson 03 — Risk vs Return: Tidak Ada Untung Tinggi Tanpa Risiko**

Sampai sekarang kita kayak ngomong: "tinggal masukin ke saham aja kan return 10%/tahun". Tapi pasar tidak sebersih itu. Lesson 03 akan menjelaskan **kenapa return tinggi selalu datang dengan risiko**, apa yang dimaksud dengan "risiko" dalam investasi (bukan cuma "rugi"), dan kenapa orang yang ngerti risiko bisa tidur nyenyak saat market crash sementara yang lain panik jual.
