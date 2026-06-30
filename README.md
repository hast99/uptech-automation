# Uptech Automation Testing

![Selenium](https://img.shields.io/badge/Selenium-4.x-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Allure Report](https://img.shields.io/badge/Allure-Report-orange?style=for-the-badge)

Framework **Automation Testing End-to-End** menggunakan **Selenium WebDriver** dan **JavaScript** dengan menerapkan konsep **Page Object Model (POM)**. Framework ini dirancang agar automation test mudah dipelihara, reusable, serta mudah dikembangkan seiring bertambahnya skenario pengujian.

---

# Daftar Isi

- Tentang Project
- Teknologi yang Digunakan
- Struktur Project
- Persiapan
- Instalasi
- Konfigurasi Environment
- Menjalankan Automation
- Modul Pengujian
- Page Object Model
- Allure Report
- Best Practice
- Repository
- Author

---

# Tentang Project

Repository ini berisi kumpulan automation testing untuk aplikasi **Uptech ERP** menggunakan Selenium WebDriver.

Framework dikembangkan untuk membantu proses regression testing sehingga pengujian dapat dilakukan secara otomatis, konsisten, dan lebih cepat dibandingkan pengujian manual.

## Fitur

- ✅ End-to-End Automation Testing
- ✅ Selenium WebDriver
- ✅ JavaScript (Node.js)
- ✅ Page Object Model (POM)
- ✅ Reusable Helper Function
- ✅ Environment Variable (.env)
- ✅ Allure Report
- ✅ Mudah dipelihara dan dikembangkan

---

# Teknologi yang Digunakan

| Teknologi | Kegunaan |
|------------|----------|
| Selenium WebDriver | Browser Automation |
| JavaScript | Bahasa Pemrograman |
| Node.js | Runtime Environment |
| npm | Dependency Management |
| Allure Report | Test Reporting |
| Git | Version Control |

---

# Struktur Project

```text
UPTECH-AUTOMATION/
│
├── allure-report/
│   └── Hasil generate Allure Report
│
├── node_modules/
│
├── src/
│   │
│   ├── pages/
│   │   ├── Helper.js
│   │   ├── Login.js
│   │   └── Logout.js
│   │
│   └── test/
│       ├── Inventory.js
│       ├── Landed Cost.js
│       ├── Purchase.js
│       ├── Sales.js
│       ├── TimeOff_AdminAndHR.js
│       ├── TimeOff_Karyawan.js
│       └── User.js
│
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

---

# Persiapan

Pastikan perangkat Anda telah menginstal software berikut.

- Node.js versi 18 atau lebih baru
- npm
- Google Chrome
- Git

Untuk memastikan instalasi berhasil, jalankan perintah berikut.

```bash
node -v
npm -v
git --version
```

---

# Instalasi

Clone repository

```bash
git clone https://github.com/hast99/uptech-automation.git
```

Masuk ke folder project

```bash
cd uptech-automation
```

Install seluruh dependency

```bash
npm install
```

---

# Konfigurasi Environment

Buat file `.env`

Contoh konfigurasi

```env
BASE_URL=https://your-url.com

USERNAME=your_username

PASSWORD=your_password
```

Sesuaikan value tersebut dengan environment yang akan digunakan.

---

# Menjalankan Automation

Menjalankan seluruh automation test

```bash
npm test
```

atau

```bash
node src/test/User.js
```

Menjalankan module tertentu

```bash
node src/test/Inventory.js
```

```bash
node src/test/Purchase.js
```

```bash
node src/test/Sales.js
```

```bash
node src/test/Landed\ Cost.js
```

```bash
node src/test/TimeOff_AdminAndHR.js
```

```bash
node src/test/TimeOff_Karyawan.js
```

---

# Modul Pengujian

Framework automation saat ini mencakup beberapa modul berikut.

| Modul | Deskripsi |
|--------|-----------|
| Login | Pengujian Login |
| Logout | Pengujian Logout |
| User | Pengelolaan Data User |
| Inventory | Pengujian Modul Inventory |
| Purchase | Pengujian Modul Purchase |
| Sales | Pengujian Modul Sales |
| Landed Cost | Pengujian Modul Landed Cost |
| Time Off Admin & HR | Pengajuan dan Approval Time Off |
| Time Off Karyawan | Pengajuan Time Off Karyawan |

---

# Page Object Model (POM)

Project ini menerapkan konsep **Page Object Model (POM)**.

Folder **pages** berisi seluruh locator, action, dan helper yang digunakan oleh automation.

```text
pages/
│
├── Helper.js
├── Login.js
└── Logout.js
```

Sedangkan folder **test** berisi seluruh test scenario.

```text
test/
│
├── Inventory.js
├── Purchase.js
├── Sales.js
├── User.js
└── ...
```

Dengan pemisahan ini, maintenance locator menjadi lebih mudah tanpa perlu mengubah seluruh script automation.

---

# Allure Report

Generate report

```bash
allure generate allure-results --clean
```

Membuka report

```bash
allure open
```

atau

```bash
allure serve allure-results
```

Report akan menampilkan informasi seperti:

- ✅ Total Test
- ✅ Passed Test
- ❌ Failed Test
- ⏱ Lama Eksekusi
- 📊 Grafik Hasil Testing
- 📝 Detail Step Execution

---

# Best Practice

Framework ini dikembangkan dengan beberapa prinsip berikut.

- Menggunakan Page Object Model
- Memisahkan Page dan Test Scenario
- Reusable Function
- Menggunakan Environment Variable
- Script mudah dipelihara
- Mudah dikembangkan
- Mendukung reporting menggunakan Allure

---

# Repository

GitHub Repository

https://github.com/hast99/uptech-automation

---

# Author

**Hafidh Syahputra**

QA Engineer | QA Automation Engineer

GitHub:
https://github.com/hast99