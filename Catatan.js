/**
 * ==============================================================================
 * CATATAN LENGKAP ARRAY METHODS: .map(), .filter(), dan .reduce()
 * ==============================================================================
 */

// ==============================================================================
// 1. METHOD .map()
// ==============================================================================
/**
 * DESKRIPSI:
 * - Digunakan untuk MENGUBAH / TRANSFORMASI setiap elemen array menjadi bentuk baru.
 * - Menghasilkan ARRAY BARU dengan PANJANG YANG SAMA DENGAN ARRAY ASLI.
 * 
 * APAKAH HARUS MENGEMBALIKAN NILAI (RETURN)?
 * - YA, WAJIB MERETURN NILAI di dalam callback-nya.
 * - Tanpa 'return', item di dalam array baru akan bernilai 'undefined'.
 * - Jika menggunakan arrow function 1 baris tanpa kurung kurawal {}, return bersifat implisit.
 */

const angka = [1, 2, 3, 4];

// Contoh A: Mengubah nilai angka
const angkaDuaKali = angka.map((item) => {
  return item * 2; // WAJIB ada return
});
console.log(angkaDuaKali); // Output: [2, 4, 6, 8]

// Contoh B: Mengubah Objek di Array (Sangat sering di React)
const notes = [
  { id: 1, text: "Belajar HTML", done: false },
  { id: 2, text: "Belajar CSS", done: false }
];

// Mengubah status 'done' pada note dengan ID === 1
const notesTerbaru = notes.map((note) => {
  if (note.id === 1) {
    return { ...note, done: true }; // Mereturn objek baru yang diperbarui
  }
  return note; // WAJIB mereturn note asli jika tidak diubah
});
console.log(notesTerbaru);
// Output: [{ id: 1, text: "Belajar HTML", done: true }, { id: 2, text: "Belajar CSS", done: false }]


// ==============================================================================
// 2. METHOD .filter()
// ==============================================================================
/**
 * DESKRIPSI:
 * - Digunakan untuk MENYELEKSI / MENYARING elemen berdasarkan kondisi tertentu.
 * - Menghasilkan ARRAY BARU yang berisi elemen-elemen yang lolos seleksi.
 * 
 * APAKAH HARUS MENGEMBALIKAN NILAI (RETURN)?
 * - YA, WAJIB MERETURN NILAI BOOLEAN (true / false).
 * - Jika return 'true', item disimpan ke array baru.
 * - Jika return 'false', item dibuang.
 */

const daftarAngka = [10, 25, 30, 45, 50];

// Contoh A: Menyaring angka > 25
const angkaBesar = daftarAngka.filter((item) => {
  return item > 25; // Mereturn boolean true/false
});
console.log(angkaBesar); // Output: [30, 45, 50]

// Contoh B: Menghapus data dari Array of Objects
const daftarProduk = [
  { id: 1, name: "Baju" },
  { id: 2, name: "Celana" },
  { id: 3, name: "Topi" }
];

const idYangDihapus = 2;
const sisaProduk = daftarProduk.filter((produk) => {
  return produk.id !== idYangDihapus; // True jika ID tidak sama dengan yang dihapus
});
console.log(sisaProduk);
// Output: [{ id: 1, name: "Baju" }, { id: 3, name: "Topi" }]


// ==============================================================================
// 3. METHOD .reduce()
// ==============================================================================
/**
 * DESKRIPSI:
 * - Digunakan untuk MENGGABUNGKAN / MENGAKUMULASI seluruh elemen array menjadi 1 NILAI TUNGGAL.
 * - Nilai tunggal tersebut bisa berupa Angka, String, Objek, atau bahkan Array baru.
 * - Menerima 2 parameter utama: callback function dan initialValue (nilai awal penampung).
 * - Callback menerima 2 parameter utama: (accumulator, currentItem).
 * 
 * APAKAH HARUS MENGEMBALIKAN NILAI (RETURN)?
 * - YA, SANGAT WAJIB. Nilai yang di-return akan menjadi isi 'accumulator' pada iterasi berikutnya.
 * - Jika lupa 'return', 'accumulator' di iterasi berikutnya akan menjadi 'undefined'.
 */

const keranjang = [
  { produk: "Kemeja", harga: 150000, qty: 2 },
  { produk: "Celana", harga: 200000, qty: 1 },
  { produk: "Kaos", harga: 50000, qty: 3 }
];

// Menghitung Total Harga Belanjaan
// 0 di akhir adalah initialValue (nilai awal akumulator)
const totalBayar = keranjang.reduce((akumulator, item) => {
  const subtotal = item.harga * item.qty;
  return akumulator + subtotal; // Nilai return ini dioper ke 'akumulator' iterasi selanjutnya
}, 0);

console.log(totalBayar); // Output: 650000


// ==============================================================================
// RINGKASAN PERBEDAAN KETIGANYA
// ==============================================================================
/**
 * 1. .map()    : Mengubah format/isi data per item -> Output: Array baru (Panjang Sama)
 * 2. .filter() : Menyaring item berdasarkan kondisi  -> Output: Array baru (Panjang Bisa Berbeda)
 * 3. .reduce() : Mengakumulasi semua item            -> Output: 1 Nilai Tunggal (Number/Object/dll)
 * 
 * Ketiganya SAMA-SAMA WAJIB ME-RETURN NILAI di dalam callback function-nya.
 */


























// ======================================================================================================




/**
 * ==============================================================================
 * CATATAN LENGKAP STRUKTUR DATA: OBJECT, MAP, DAN ARRAY
 * ==============================================================================
 */

// ==============================================================================
// 1. OBJECT (Koleksi Pasangan Key-Value Sederhana)
// ==============================================================================
/**
 * PENJELASAN:
 * - Struktur data dasar JavaScript untuk menyimpan data terstruktur dengan pasangan key-value.
 * - Key pada Object HANYA BISA berupa String atau Symbol.
 * - Cocok untuk entitas tunggal dengan properti yang sudah pasti (statis).
 * 
 * KONDISI PALING COCOK:
 * - Menyimpan data entitas spesifik (misal: data user, setting aplikasi, props React).
 * - Ketika key berupa nama string yang tetap dan tidak sering ditambah/dihapus secara dinamis.
 */

// Contoh Deklarasi
const user = {
  id: 1,
  name: "Osama",
  role: "Admin"
};

// --- METHOD DAN MANIPULASI OBJECT ---

// A. Object.keys() - Mengambil semua key dalam bentuk Array
const keys = Object.keys(user); 
console.log(keys); // Output: ["id", "name", "role"]

// B. Object.values() - Mengambil semua nilai (value) dalam bentuk Array
const values = Object.values(user); 
console.log(values); // Output: [1, "Osama", "Admin"]

// C. Object.entries() - Mengambil pasangan [key, value] dalam bentuk Array 2D
const entries = Object.entries(user); 
console.log(entries); // Output: [["id", 1], ["name", "Osama"], ["role", "Admin"]]

// D. Object.assign() atau Spread Operator ({...}) - Menggabungkan / Menyalin Object
const userWithStatus = { ...user, isActive: true };
console.log(userWithStatus); // Output: { id: 1, name: "Osama", role: "Admin", isActive: true }


// ==============================================================================
// 2. MAP (Koleksi Key-Value Tingkat Lanjut)
// ==============================================================================
/**
 * PENJELASAN:
 * - Koleksi pasangan key-value di mana KEY BISA BERSUTAN TIPE DATA APA SANGAT (Object, Function, Number, dll).
 * - Memiliki keunggulan performa saat menambah/menghapus data secara dinamis dalam jumlah besar.
 * - Menyimpan urutan elemen sesuai dengan waktu penambahan (insertion order).
 * 
 * KONDISI PALING COCOK:
 * - Ketika butuh key berupa Non-String (misal: menjadikan elemen DOM atau Objek sebagai key).
 * - Aplikasi yang sering melakukan operasi tambah/hapus data (*frequent add/delete*).
 * - Membutuhkan fitur hitung ukuran data secara instan via `map.size`.
 */

// Contoh Deklarasi
const userCache = new Map();

// --- METHOD PADA MAP ---

// A. .set(key, value) - Menambahkan / memperbarui data
const objKey = { id: 99 };
userCache.set("user_1", { name: "Budi" });
userCache.set(objKey, "Session Token XYZ"); // Key berupa Object!

// B. .get(key) - Mengambil data berdasarkan key
console.log(userCache.get("user_1")); // Output: { name: "Budi" }
console.log(userCache.get(objKey));   // Output: "Session Token XYZ"

// C. .has(key) - Mengecek apakah key ada di dalam Map (menghasilkan boolean)
console.log(userCache.has("user_1")); // Output: true

// D. .delete(key) - Menghapus data berdasarkan key
userCache.delete("user_1");

// E. .size - Mengetahui jumlah item secara instan (properti, bukan method)
console.log(userCache.size); // Output: 1

// F. .clear() - Menghapus seluruh isi Map
// userCache.clear();


// ==============================================================================
// 3. ARRAY (Koleksi Data Terurut Berdasarkan Indeks)
// ==============================================================================
/**
 * PENJELASAN:
 * - Struktur data terurut (*ordered list*) yang diakses menggunakan indeks angka (dimulai dari 0).
 * - Nilai di dalam Array bisa berupa tipe data apa saja (Campuran Primitif & Objek).
 * 
 * KONDISI PALING COCOK:
 * - Menyimpan daftar/list data bertipe sejenis (misal: daftar produk, daftar catatan).
 * - Ketika urutan data sangat penting.
 * - Ketika butuh iterasi dan manipulasi masal menggunakan method seperti map, filter, atau reduce.
 */

// Contoh Deklarasi
const buah = ["Apel", "Mangga", "Pisang"];

// --- METHOD POPULER PADA ARRAY ---

// A. .push() - Menambah item di AKHIR array (Mutasi Array Asli)
buah.push("Jeruk"); 
console.log(buah); // Output: ["Apel", "Mangga", "Pisang", "Jeruk"]

// B. .pop() - Menghapus item TERAKHIR array (Mutasi Array Asli)
buah.pop(); 
console.log(buah); // Output: ["Apel", "Mangga", "Pisang"]

// C. .includes() - Mengecek apakah suatu nilai ada dalam array (mengembalikan boolean)
console.log(buah.includes("Mangga")); // Output: true

// D. .indexOf() - Mencari indeks dari suatu nilai primitif (-1 jika tidak ditemukan)
console.log(buah.indexOf("Pisang")); // Output: 2

// E. .find() - Mencari item pertama yang memenuhi kondisi callback (cocok untuk Array of Objects)
const listUser = [
  { id: 1, name: "Andi" },
  { id: 2, name: "Siti" }
];
const dicari = listUser.find((item) => item.id === 2);
console.log(dicari); // Output: { id: 2, name: "Siti" }

// F. .concat() / Spread Operator ([...]) - Menggabungkan array tanpa merusak array asli
const buahLain = ["Melon", "Anggur"];
const semuaBuah = [...buah, ...buahLain];
console.log(semuaBuah); // Output: ["Apel", "Mangga", "Pisang", "Melon", "Anggur"]


// ==============================================================================
// RINGKASAN & PERBANDINGAN PENGGUNAAN
// ==============================================================================
/**
 * 1. OBJECT : Gunakan untuk data berstruktur tetap dengan nama properti yang jelas.
 *             Contoh: state form, profil user, config setting.
 * 
 * 2. MAP    : Gunakan saat butuh pencarian key-value berkinerja tinggi, key berupa objek/bebas,
 *             atau daftar yang sering bongkar-pasang data.
 *             Contoh: Caching data API, pemetaan elemen DOM ke Metadata.
 * 
 * 3. ARRAY  : Gunakan untuk kumpulan data berurut yang perlu di-looping, di-filter, atau di-render ke UI.
 *             Contoh: Data tabel, daftar pesan chat, list catatan/todo.
 */











//=================================================================================================================================================================






/**
 * ==============================================================================
 * CATATAN LENGKAP: IIFE (Immediately Invoked Function Expression)
 * ==============================================================================
 */

// ==============================================================================
// 1. PENGERTIAN & ALASAN SINTAKS
// ==============================================================================
/**
 * APA ITUD IIFE?
 * IIFE adalah fungsi JavaScript yang LANGSUNG DIJALANKAN seketika setelah didefinisikan.
 * 
 * KENAPA HARUS DIBUNGKUS () KEDUA SISINYA?
 * - Tanpa kurung pembungkus `( ... )`, JS menganggapnya sebagai "Function Declaration" 
 *   yang wajib punya nama dan TIDAK BISA dipanggil langsung dengan `()`.
 * - Tanda kurung pembungkus `( ... )` mengubah fungsi menjadi "Function Expression" (Nilai).
 * - Tanda kurung eksekusi `()` di paling akhir bertugas MEMANGGIL fungsi tersebut secara instan.
 */


// ==============================================================================
// 2. PERBANDINGAN: FUNGSI BIASA VS IIFE
// ==============================================================================

// --- BENTUK A: Fungsi Biasa (Function Declaration) ---
function sapaBiasa() {
  console.log("Halo dari Fungsi Biasa!");
}
// ❌ Tidak akan pernah jalan kalau tidak dipanggil manual!
sapaBiasa(); // Wajib dipanggil eksplisit

// --- BENTUK B: IIFE (Arrow Function) ---
(() => {
  console.log("Halo dari IIFE Arrow Function!");
})(); // 🟢 Langsung jalan tanpa panggil nama!

// --- BENTUK C: IIFE (Function Anonym Biasa) ---
(function() {
  console.log("Halo dari IIFE Anonymous Function!");
})(); // 🟢 Langsung jalan!


// ==============================================================================
// 3. PENGGUNAAN UTAMA DI DUNIA NYATA & CONTOHNYA
// ==============================================================================

// ------------------------------------------------------------------------------
// PENGGUNAAN 1: Mencegah Pencemaran Scope Global (Private Variable / Encapsulation)
// ------------------------------------------------------------------------------
/**
 * LOKASI PENGGUNAAN: 
 * Digunakan pada Script Widget, Plugin pihak ketiga, atau Modul Vanilla JS.
 * TUJUAN:
 * Mencegah variabel kita mengalami "Variable Collisions" (bentrokan nama) dengan 
 * variabel milik orang lain di `window` (global scope).
 */

// Tanpa IIFE: 'apiKey' bocor ke global window.apiKey
// Dengan IIFE:
(() => {
  // Variabel ini TERKUNCI AMAN di dalam. Tidak bisa diakses dari luar!
  const apiKey = "SECRET_KEY_12345";
  const dbConfig = { host: "localhost", port: 5432 };

  function connect() {
    console.log(`Mengakses DB di ${dbConfig.host} dengan Key: ${apiKey}`);
  }

  connect();
})();

// console.log(apiKey); // ❌ ERROR: Uncaught ReferenceError: apiKey is not defined


// ------------------------------------------------------------------------------
// PENGGUNAAN 2: Top-Level Async / Await di File / Script Utama
// ------------------------------------------------------------------------------
/**
 * LOKASI PENGGUNAAN:
 * Digunakan pada file entry point (misal: `index.js`, script inisialisasi API) 
 * saat lingkungan/browser lama belum mendukung Top-Level Await di luar modul.
 * TUJUAN:
 * Membuka scope `async` agar kita bisa memakai sintaks `await` secara langsung.
 */

(async () => {
  try {
    console.log("Mengambil data dari API...");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Data berhasil diambil via Async IIFE:", data);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
})();


// ------------------------------------------------------------------------------
// PENGGUNAAN 3: Module Pattern (Private vs Public Method/Data)
// ------------------------------------------------------------------------------
/**
 * LOKASI PENGGUNAAN:
 * Membuat pustaka/library JavaScript sederhana yang mengembalikan objek publik, 
 * namun menyembunyikan detail logika di dalamnya.
 */

const CounterModule = (() => {
  let count = 0; // 🔒 Private Variable (Tidakk bisa diubah langsung dari luar)

  return {
    increment: () => {
      count++;
      console.log(`Count saat ini: ${count}`);
    },
    reset: () => {
      count = 0;
      console.log("Count di-reset!");
    },
    getCount: () => count
  };
})();

// Penggunaan:
CounterModule.increment(); // Count saat ini: 1
CounterModule.increment(); // Count saat ini: 2
console.log(CounterModule.getCount()); // Output: 2
// CounterModule.count = 999; // ❌ Tidak berpengaruh pada state privat `count`!


// ------------------------------------------------------------------------------
// PENGGUNAAN 4: Mengirim Parameter ke Dalam IIFE
// ------------------------------------------------------------------------------
/**
 * LOKASI PENGGUNAAN:
 * Ketika ingin memasukkan variabel global (seperti `window` atau `document`) ke dalam 
 * scope lokal agar eksekusi kode lebih cepat dan aman dari modifikasi luar.
 */

((globalWindow, globalDocument) => {
  // `globalWindow` dan `globalDocument` menjadi variabel lokal di scope ini
  const title = globalDocument.title;
  console.log(`Judul halaman saat ini adalah: ${title}`);
})(window, document); // Parameter dioper di dalam kurung eksekusi paling akhir


// ==============================================================================
// RINGKASAN KAPAN HARUS / TIDAK HARUS PAKAI IIFE
// ==============================================================================
/**
 * 🟢 PAKAI IIFE JIKA:
 * 1. Butuh mengeksekusi kode inisialisasi SEKALI SAJA saat script pertama di-load.
 * 2. Ingin membungkus variabel agar privat & tidak mengotori global scope.
 * 3. Butuh memakai `async/await` di tingkat teratas script tanpa bikin fungsi terpisah.
 * 
 * 🔴 TIDAK PERLU IIFE JIKA:
 * 1. Kamu sudah menggunakan sistem ES6 Module (`import` / `export`), karena ES Module 
 *    secara otomatis sudah mengisolasi file (Scope terisolasi per file secara default).
 * 2. Fungsi tersebut perlu dipanggil berkali-kali di tempat lain (Gunakan fungsi biasa).
 */









//=====================================================================================================



/**
 * ==============================================================================
 * CATATAN LENGKAP PROPERTI EVENT DOM & REACT (e.target, e.currentTarget, DLL)
 * ==============================================================================
 */

// ==============================================================================
// 1. e.target VS e.currentTarget (PERBEDAAAN UTAMA & PALING PENTING)
// ==============================================================================
/**
 * PERBEDAN DASAR:
 * - e.target      : Elemen ASLI yang MENGELUARKAN / MENTRIGGER event (elemen yang diklik langsung).
 * - e.currentTarget: Elemen yang MENDENGARKAN / MEMEGANG Event Listener (elemen tempat handler dipasang).
 * 
 * KAPAN NILAINYA SAMA?
 * - Ketika kamu mengklik langsung elemen yang dipasangi event listener.
 * 
 * KAPAN NILAINYA BERBEDA?
 * - Saat terjadi "Event Bubbling" (elemen anak di dalam container diklik).
 */

// Contoh HTML Struktur:
// <button id="btn-parent">
//   <span id="text-child">Klik Saya</span>
// </button>

const buttonParent = document.getElementById("btn-parent");

buttonParent.addEventListener("click", (e) => {
  // Jika pengguna mengklik tepat pada teks <span> "Klik Saya":
  console.log(e.target);        // Output: <span>Klik Saya</span> (Elemen yang tertekan)
  console.log(e.currentTarget); // Output: <button id="btn-parent">...</button> (Pemilik Listener)
});

/**
 * PENGGUNAAN DI DUNIA NYATA (Event Delegation):
 * Memasang 1 listener di parent untuk menangani klik dari banyak elemen anak.
 */
const todoList = document.getElementById("todo-list");

todoList.addEventListener("click", (e) => {
  // Cek apakah elemen yang diklik spesifik tombol hapus
  if (e.target.classList.contains("btn-delete")) {
    const todoId = e.target.dataset.id;
    console.log(`Menghapus To-Do ID: ${todoId}`);
  }
});


// ==============================================================================
// 2. PROPERTI INPUT UTAMA (e.target.value, e.target.checked, DLL)
// ==============================================================================

// --- A. e.target.value ---
// Digunakan pada: <input type="text">, <textarea>, <select>
const handleInputChange = (e) => {
  // Mengambil teks/string yang ditik atau dipilih pengguna
  const textInput = e.target.value;
  console.log("Input saat ini:", textInput);
};

// --- B. e.target.checked ---
// Digunakan khusus pada: <input type="checkbox"> dan <input type="radio">
const handleCheckboxChange = (e) => {
  // Mengambil nilai Boolean (true jika dicentang, false jika tidak)
  const isChecked = e.target.checked;
  console.log("Status centang:", isChecked); // Output: true / false
};

// --- C. e.target.name ---
// Mengambil nama atribut 'name' dari elemen input (Sangat berguna untuk Dynamic Form di React)
const handleFormInput = (e) => {
  const fieldName = e.target.name;  // Misal: "email"
  const fieldValue = e.target.value; // Misal: "user@mail.com"

  // Mengubah state form secara dinamis
  // setFormData({ ...formData, [fieldName]: fieldValue });
};


// ==============================================================================
// 3. PROPERTI LAIN YANG SANGAT SERING DIPAKAI
// ==============================================================================

// --- A. e.preventDefault() ---
// Method untuk MENGHENTIKAN Aksi Default bawaan browser.
const handleFormSubmit = (e) => {
  e.preventDefault(); // Mencegah browser reload/refresh halaman saat form di-submit!
  console.log("Form dikirim via AJAX/Fetch!");
};

// --- B. e.stopPropagation() ---
// Method untuk MENGHENTIKAN Event Bubbling (agar event tidak merambat ke parent di atasnya).
const handleChildClick = (e) => {
  e.stopPropagation(); // Mencegah handler klik milik Parent ikut berjalan
  console.log("Klik cuma sampai di anak!");
};

// --- C. e.key & e.code (Event Keydown/Keyup) ---
// Digunakan saat mendeteksi ketikan keyboard (misal: tombol Enter/Escape).
const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    console.log("Pengguna menekan tombol Enter!");
  }
  if (e.key === "Escape") {
    console.log("Modal ditutup via tombol ESC!");
  }
};

// --- D. e.target.files ---
// Digunakan khusus pada: <input type="file">
const handleFileUpload = (e) => {
  // Mengambil Array/FileList file yang diunggah pengguna
  const selectedFile = e.target.files[0]; 
  console.log("Nama File:", selectedFile.name);
  console.log("Ukuran File (bytes):", selectedFile.size);
};


// ==============================================================================
// TABEL RINGKASAN PROPERTI EVENT
// ==============================================================================
/**
 * ┌──────────────────────┬────────────────────────────────────────────────────────┐
 * │ PROPERTI / METHOD    │ KEGUNAAN & KONDISI PENGGUNAAN                          │
 * ├──────────────────────┼────────────────────────────────────────────────────────┤
 * │ e.target             │ Mengambil elemen spesifik yang langsung diklik/ditunjuk│
 * │ e.currentTarget      │ Mengambil elemen pemilik fungsi event handler           │
 * │ e.target.value       │ Mengambil isi teks dari Input Text, Select, Textarea   │
 * │ e.target.checked     │ Mengambil nilai Boolean (true/false) Checkbox/Radio    │
 * │ e.target.name        │ Mengambil string atribut `name="..."` pada elemen input│
 * │ e.target.files       │ Mengambil file yang diunggah dari <input type="file">  │
 * │ e.preventDefault()   │ Mencegah perilaku default browser (seperti reload form)│
 * │ e.stopPropagation()  │ Mencegah event merambat naik ke elemen parent          │
 * │ e.key                │ Membaca karakter tombol keyboard yang ditekan          │
 * └──────────────────────┴────────────────────────────────────────────────────────┘
 */
















// ===============================================================================================



/**
 * ==============================================================================
 * CATATAN LENGKAP: PROPS CHILDREN & PROPS KHUSUS LAINNYA DI REACT
 * ==============================================================================
 */

// ==============================================================================
// 1. PROPS `children` (Props Khusus Paling Utama)
// ==============================================================================
/**
 * APA ITUD PROPS `children`?
 * - `children` adalah props bawaan (reserved prop) dari React.
 * - Digunakan untuk menangkap APAPUN yang ditulis di ANTARA TAG PEMBUKA DAN PENUTUP 
 *   komponen (seperti elemen HTML biasa: <div>isi elemen</div>).
 * 
 * KEGUNAAN UTAMA:
 * - Membuat **Wrapper / Layout Component** (Card, Modal, Layout, Container).
 * - Menerapkan konsep **Composition** daripada Inheritance.
 * - Membuat komponen yang re-usable tanpa harus membatasi isi konten di dalamnya.
 */

// Contoh A: Membuat Komponen Card Reusable dengan `children`
function Card({ title, children }) {
  return (
    <div className="card-border">
      <h3>{title}</h3>
      {/* All element placed inside <Card>...</Card> will render here */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// Cara Penggunaan Komponen Card:
function App() {
  return (
    <div>
      {/* Isi children bisa berupa teks, elemen HTML, atau komponen React lain */}
      <Card title="Profil User">
        <p>Nama: Osama</p>
        <button>Edit Profil</button>
      </Card>

      <Card title="Pengaturan">
        <input type="checkbox" /> Aktifkan Notifikasi
      </Card>
    </div>
  );
}

/**
 * PENJELASAN CONTOH A:
 * Pada <Card title="Profil User">...</Card>, tag <p> dan <button> otomatis 
 * masuk ke dalam props `children`. Komponen `Card` tidak perlu tahu isi detailnya, 
 * ia hanya bertugas menyediakan "wadah" pembungkusnya.
 */


// ==============================================================================
// 2. PROPS KHUSUS LAINNYA DI REACT (Reserved / Special Props)
// ==============================================================================
/**
 * Selain `children`, React memiliki beberapa nama props khusus lain yang memiliki 
 * perilaku spesifik di bawah tenda (under the hood):
 */

// ------------------------------------------------------------------------------
// A. PROPS `key` (Digunakan Saat Looping / Rendering List)
// ------------------------------------------------------------------------------
/**
 * KEGUNAAN:
 * - Memberi identitas unik pada tiap elemen dalam daftar (Array).
 * - Membantu algoritma Diffing (Reconciliation) React mengetahui item mana 
 *   yang ditambah, diubah, atau dihapus secara efisien.
 * 
 * CATATAN PENTING:
 * - Props `key` TIDAK BISA DIBACA / DIAKSES di dalam komponen anak!
 * - Jika kamu butuh nilai ID di dalam komponen anak, gunakan nama props lain (misal: `id={item.id}`).
 */

function TodoList({ items }) {
  return (
    <ul>
      {items.map((todo) => (
        // `key` khusus untuk React, tidak dikirim sebagai props biasa ke komponen TodoItem
        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}

function TodoItem({ id, text }) {
  // console.log(props.key); // ❌ UNDEFINED! Key tidak bisa dibaca manual.
  return <li>{text} (ID: {id})</li>;
}


// ------------------------------------------------------------------------------
// B. PROPS `ref` (Mengkaitkan Elemen DOM Langsung)
// ------------------------------------------------------------------------------
/**
 * KEGUNAAN:
 * - Digunakan untuk mengambil referensi elemen DOM asli (seperti <input>, <div>).
 * - Berguna untuk fokus input (`inputRef.current.focus()`), mengukur ukuran elemen, 
 *   atau integrasi dengan library non-React.
 */

import { useRef } from "react";

function FormInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // `ref` memberi akses langsung ke node DOM <input>
    inputRef.current.focus();
  };

  return (
    <div>
      {/* `ref` adalah atribut khusus React */}
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Fokuskan Input</button>
    </div>
  );
}


// ------------------------------------------------------------------------------
// C. TECHNIQUE: Render Props (Mengoper Fungsi yang Merender JSX)
// ------------------------------------------------------------------------------
/**
 * KEGUNAAN:
 * - Pola di mana props berisi sebuah FUNGSI yang mengembalikan elemen JSX.
 * - Sangat bermanfaat jika komponen Parent ingin membagikan STATE/LOGIKA internalnya 
 *   ke Child, tapi tampilan UI-nya dibebaskan ke pemanggil.
 */

// Komponen penangkap posisi kursor mouse
function MouseTracker({ render }) {
  // Logic internal
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {/* Memanggil fungsi 'render' sambil mengoper data state internal */}
      {render(position)}
    </div>
  );
}

// Cara Penggunaan:
function MouseApp() {
  return (
    <MouseTracker
      render={(pos) => (
        <h1>Posisi Mouse: {pos.x}, {pos.y}</h1>
      )}
    />
  );
}


// ==============================================================================
// RINGKASAN PROPS KHUSUS REACT
// ==============================================================================
/**
 * 1. `children` : Menangkap elemen di antara tag pembuka & penutup komponen.
 * 2. `key`      : Identitas unik untuk optimasi loop array (TIDAK BISA dibaca di dalam komponen).
 * 3. `ref`      : Mengakses elemen DOM asli secara langsung via `useRef`.
 * 4. Render Props: Mengoper fungsi penentu tampilan UI untuk berbagi logika state.
 */