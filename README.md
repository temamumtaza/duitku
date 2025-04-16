# 💸 Duitku

[![Deploy to GitHub Pages](https://img.shields.io/badge/Live-Duitku-green?logo=github)](https://temamumtaza.github.io/duitku)

Duitku adalah aplikasi pencatatan pengeluaran pribadi yang ringan, modern, dan mobile-first. Dirancang untuk pengalaman seperti aplikasi native, Duitku membantu kamu mengelola keuangan harian dengan mudah, cepat, dan menyenangkan.

---

## 🚀 Fitur Utama

- **Tambah Pengeluaran**
- **Edit & Hapus Pengeluaran**
- **Kategori Pengeluaran**
- **Penyimpanan Lokal**
- **Progressive Web App (PWA)**
  - Bisa di-install di HP, akses cepat dari home screen, dan tetap bisa digunakan offline.
- **Desain Mobile Friendly**

---

## 🛠️ Teknologi
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [PWA](https://web.dev/progressive-web-apps/)
- [GitHub Pages](https://pages.github.com/)

---

## 🏗️ Arsitektur Singkat
- **App.js**: State utama, handle tambah/edit/hapus, layout utama
- **ExpenseForm.jsx**: Form tambah & edit pengeluaran
- **ExpenseList.jsx**: List pengeluaran, tombol edit & hapus
- **TotalAmount.jsx**: Bar total pengeluaran
- **localStorage**: Menyimpan data pengeluaran secara lokal
- **Service Worker**: Untuk PWA/offline

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
- Nikmati pengalaman seperti aplikasi keuangan modern langsung dari home screen!

---

## 🏷️ Release Notes

### v1.0.0 (Stable)
- MVP stabil, UI mobile friendly
- Fitur tambah, edit, hapus pengeluaran
- Daftar pengeluaran interaktif
- Total pengeluaran real-time
- Data tersimpan otomatis
- PWA-ready, bisa di-install di HP
- Live di GitHub Pages

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