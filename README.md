# 💸 Duitku

[![Deploy to GitHub Pages](https://img.shields.io/badge/Live-Duitku-green?logo=github)](https://temamumtaza.github.io/duitku)

Aplikasi pencatatan pengeluaran pribadi, ringan, mobile-first, dan siap di-install sebagai PWA. Dibuat dengan React + Tailwind CSS, dirancang seperti aplikasi native untuk pengalaman terbaik di smartphone.

---

## 🚀 Fitur Utama

- **Form Input Pengeluaran**
  - Nama, Nominal, Kategori (Makanan, Transportasi, Hiburan, Lainnya)
  - Tombol "Tambah" besar, mudah dijangkau jempol
- **Daftar Pengeluaran**
  - Tampil seperti kartu chat, info lengkap: nama, nominal (format IDR), kategori, tanggal
  - Bisa **edit** dan **hapus** pengeluaran
- **Total Pengeluaran**
  - Bar ringkas, fixed di bawah layar
- **Penyimpanan Lokal**
  - Data tersimpan di localStorage, tetap ada setelah refresh
- **PWA-ready**
  - Bisa di-install di iOS/Android, fullscreen, tanpa URL bar
- **Mobile Native Feel**
  - UI besar, rounded, shadow lembut, animasi tap, padding luas
  - **Header sticky**, **form sticky**, **total bar fixed**, **list scrollable**
  - **Scroll lock**: hanya list pengeluaran yang bisa di-scroll

---

## 🛠️ Teknologi
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [PWA](https://web.dev/progressive-web-apps/)
- [GitHub Pages](https://pages.github.com/)

---

## 🏗️ Arsitektur Singkat
- **App.js**: State utama, handle add/edit/delete, layout sticky/fixed
- **ExpenseForm.jsx**: Form tambah & edit pengeluaran
- **ExpenseList.jsx**: List pengeluaran, tombol edit & hapus
- **TotalAmount.jsx**: Bar total pengeluaran (fixed di bawah)
- **localStorage**: Menyimpan data pengeluaran secara lokal
- **Service Worker**: Untuk PWA/offline

---

## 📚 Istilah UI/UX
- **Sticky**: Elemen tetap di posisi tertentu saat scroll, tapi masih dalam flow layout (biasa untuk header/form)
- **Fixed**: Elemen selalu di posisi tertentu pada layar, tidak terpengaruh scroll (biasa untuk footer/bar total)
- **Scrollable/Scroll View**: Kontainer yang bisa di-scroll, konten di dalamnya bisa lebih panjang dari layar
- **Scroll lock**: Body/halaman tidak bisa di-scroll, hanya container tertentu yang bisa scroll

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
5. **Deploy ke GitHub Pages**
   ```bash
   npm run deploy
   ```

---

## 🌐 Akses Aplikasi

✨ [Buka Duitku di browser (GitHub Pages)](https://temamumtaza.github.io/duitku)

---

## 🌟 Install di HP (PWA)
- Buka di browser HP (Chrome/Safari)
- Tap "Add to Home Screen"
- Nikmati pengalaman seperti aplikasi native!

---

## 🏷️ Release Notes

### v1.0.0 (Stable)
- MVP stabil, UI mobile friendly
- Fitur tambah, edit, hapus pengeluaran
- Header sticky, form sticky, total bar fixed, list scrollable
- Data tersimpan di localStorage
- PWA-ready, bisa di-install di HP
- Live di GitHub Pages
- Scroll lock: hanya list pengeluaran yang bisa di-scroll

### v0.1.3-beta
- Fitur edit & hapus pengeluaran, UI/UX sticky header, form, scrollable list, fixed total

### v0.1.2-beta
- Sudah live di GitHub Pages

### v0.1.1-beta
- Fix bug data tidak tersimpan setelah refresh/close

### v0.1.0-beta
- MVP: Form input, tampilkan list, total, localStorage, PWA-ready

---

## 🛟 Troubleshooting
- **Perubahan tidak muncul di versi live?**
  - Lakukan hard refresh (Ctrl+F5/Cmd+Shift+R)
  - Jika install di HP, uninstall dulu lalu install ulang
- **Data hilang?**
  - Pastikan browser tidak dalam mode private/incognito
  - Data hanya tersimpan di device/browser yang sama

---

## 📄 Lisensi
MIT 