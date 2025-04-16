# 💸 Duitku

Aplikasi pencatatan pengeluaran pribadi, ringan, mobile-first, dan siap di-install sebagai PWA. Dibuat dengan React + Tailwind CSS, dirancang seperti aplikasi native untuk pengalaman terbaik di smartphone.

---

## 🚀 Fitur Utama

- **Form Input Pengeluaran**
  - Nama, Nominal, Kategori (Makanan, Transportasi, Hiburan, Lainnya)
  - Tombol "Tambah" besar, mudah dijangkau jempol
- **Daftar Pengeluaran**
  - Tampil seperti kartu chat, info lengkap: nama, nominal (format IDR), kategori, tanggal
- **Total Pengeluaran**
  - Bar ringkas, fixed di bawah layar
- **Penyimpanan Lokal**
  - Data tersimpan di localStorage, tetap ada setelah refresh
- **PWA-ready**
  - Bisa di-install di iOS/Android, fullscreen, tanpa URL bar
- **Mobile Native Feel**
  - UI besar, rounded, shadow lembut, animasi tap, padding luas

---

## 🛠️ Teknologi
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [PWA](https://web.dev/progressive-web-apps/)

---

## 📱 Tampilan
![Screenshot Duitku](public/screenshot.png)

---

## ⚡ Cara Install & Jalankan

1. **Clone repo**
   ```bash
   git clone https://github.com/temamumtaza/duitku.git
   cd duitku
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Jalankan lokal**
   ```bash
   npm start
   ```
4. **Build untuk produksi**
   ```bash
   npm run build
   ```

---

## 🌟 Install di HP (PWA)
- Buka di browser HP (Chrome/Safari)
- Tap "Add to Home Screen"
- Nikmati pengalaman seperti aplikasi native!

---

## 🏷️ Version
- **v0.1.0-beta** – MVP: Form input, tampilkan list, total, localStorage, PWA-ready

---

## 📄 Lisensi
MIT 