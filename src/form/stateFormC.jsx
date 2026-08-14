
import {useState} from "react";
export default function Counter3() {
    let [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((c) => c + 1); //jadi ini kana mengambil nilai counter terbaru meskipun belum dirender jadi cuma mengambil nial yang didaftarkan di render berikutnya lalau ditambha satu
        setCounter((c) => c + 1); //jadi ini kana mengambil nilai counter terbaru meskipun belum dirender jadi cuma mengambil nial yang didaftarkan di render berikutnya lalau ditambha satu
        setCounter((c) => c + 1); //jadi ini kana mengambil nilai counter terbaru meskipun belum dirender jadi cuma mengambil nial yang didaftarkan di render berikutnya lalau ditambha satu
        console.log(counter); //ini akan menghasilkan counter yang saat ini tidak akan terpengaruh dengan setCounter diatasnya
    }
    return (
        <div>
            <button onClick={handleIncrement}>naik</button>

            <h1>Counter: {counter}</h1>
        </div>
    )
}




//catatan
// jadi ada yang pakai bentuk seperti ini setCounter((c) => c + 1); atau setCounter(counterc + 1);

// perbedannya
// kalau setCounter((c) => c + 1); 
// ini digunakan saat lebih dari stau logikan dan mau mengambil data counter yangg terbaru atau yang sedang di daftarkan di render setelahnya


//kalau setCounter(counterc + 1);
// ini digunakan untuk kalau ada satu logika saja seperti ini jadi sebenarnya itu daiatas kode ini itu lebih baik pakai yang bentuk seperti ini karena hanya satu logika tapi karena 
// harus mengambil data terbaru maka haru spakai bentuk yang atas atau bisa juag kalau mau naik 3 bisa bentuknya sepeti ini setCounter(counterc + 3);



import { useState, useEffect } from "react";

/**
 * ====================================================================
 * RANGKUMAN CATATAN BELAJAR REACT: STATE, RENDER, & IMMUTABILITY
 * ====================================================================
 * 
 * 1. APA ITUS STATE & MENGAPA VARIABEL BIASA ('let') GAGAL?
 *    - State adalah memori khusus milik React untuk menyimpan data interaktif.
 *    - Variabel biasa (`let x = 0`) TIDAK BISA menggantikan State karena:
 *      a. Perubahan variabel biasa tidak memberi sinyal ke React untuk melakukan Re-render.
 *      b. Saat Re-render terjadi, variabel biasa akan di-reset kembali ke nilai awal.
 *    - State bertahan di memori React selama tidak di-refresh (Reload browser F5).
 * 
 * 2. APA ITU RENDER & RE-RENDER?
 *    - Render adalah proses React memanggil/menjalankan fungsi komponen dari atas
 *      ke bawah untuk menghitung tampilan UI (JSX) terbaru.
 *    - Re-render dipicu ketika fungsi pembaru state (misal: `setCount`) dipanggil.
 * 
 * 3. STATE SNAPSHOT & ASYNCHRONOUS STATE
 *    - Nilai State di dalam satu siklus render bersifat tetap seperti "Foto Snapshot".
 *    - Memanggil `setCounter(counter + 1)` tidak langsung mengubah variabel `counter`
 *      pada baris berikutnya, melainkan mendaftarkan permintaan Re-render untuk siklus berikutnya.
 *    - Karena itu, `console.log(counter)` di dalam event handler akan mencetak nilai lama.
 * 
 * 4. UPDATER FUNCTION vs NILAI LANGSUNG
 *    - Nilai Langsung: `setCount(count + 1)` -> Menggunakan nilai snapshot saat ini.
 *    - Updater Function: `setCount((prev) => prev + 1)` -> Membaca nilai paling mutakhir
 *      di dalam antrean memori React. Wajib dipakai jika memanggil setState berkali-kali dalam 1 event handler.
 * 
 * 5. ATURAN MENGUBAH OBJECT DI STATE (IMMUTABILITY)
 *    - Dilarang mengedit/mutasi object di state secara langsung (`user.name = 'x'`)
 *      karena alamat memorinya tetap sama, sehingga React menganggap data tidak berubah dan UI gagal Re-render.
 *    - Solusi: Buat object baru menggunakan Spread Operator (`...user`).
 */

export default function CatatanStateReact() {
  // A. Inisialisasi State Sederhana
  // Nilai di dalam useState(0) adalah Initial State (hanya dibaca saat render pertama kali)
  const [count, setCount] = useState(0);

  // B. Inisialisasi State Berbentuk Object
  const [user, setUser] = useState({
    name: "Osama",
    role: "Developer",
  });

  // --- HANDLER 1: Menambah +1 (Cara Standar / Langsung) ---
  const handleIncrementBiasa = () => {
    setCount(count + 1);
    // Catatan: console.log di sini mencetak nilai snapshot lama
    console.log("Nilai snapshot saat tombol diklik:", count);
  };

  // --- HANDLER 2: Menambah +3 Sekaligus (Menggunakan Updater Function) ---
  const handleIncrementTigaKali = () => {
    // 'prev' / 'prevState' / 'c' membaca nilai mutakhir dari antrean React
    setCount((prev) => prev + 1); // 0 + 1 = 1
    setCount((prev) => prev + 1); // 1 + 1 = 2
    setCount((prev) => prev + 1); // 2 + 1 = 3
  };

  // --- HANDLER 3: Mengubah Properti Object yang Benar (Immutability) ---
  const handleUpdateUser = () => {
    setUser((prevUser) => ({
      ...prevUser, // 1. Salin seluruh properti lama
      name: "Mohamad Osama", // 2. Timpa properti yang ingin diubah
    }));
  };

  // --- MONITORING: Memantau Perubahan State saat Re-render Terjadi ---
  useEffect(() => {
    console.log("🟢 RE-RENDER TERJADI! Nilai 'count' di layar sekarang:", count);
  }, [count]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Catatan & Demo React State</h2>

      {/* Tampilan Count */}
      <section style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <h3>1. Counter State: {count}</h3>
        <button onClick={handleIncrementBiasa} style={{ marginRight: "10px" }}>
          +1 (Cara Biasa)
        </button>
        <button onClick={handleIncrementTigaKali}>
          +3 (Updater Function)
        </button>
      </section>

      {/* Tampilan Object State */}
      <section>
        <h3>2. Object State</h3>
        <p>Nama: {user.name}</p>
        <p>Role: {user.role}</p>
        <button onClick={handleUpdateUser}>
          Ubah Nama (Spread Operator)
        </button>
      </section>
    </div>
  );
}
