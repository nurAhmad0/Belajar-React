
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




