import { useState } from "react";
import Counter from "./Counter";

export default function CounterAppC() {
    const [show2, setShow2] = useState(true);

    const handleChange = (e) => {
        setShow2(e.target.checked);
        // diaatas ini jiak dicentang maka akan menghasilkan true dan jiak tidak maka akan menghasilkan false

    }



    return (
        <div>
          <h1> posisi sama </h1>
            {show2 ? <Counter name={"ahmad"}/> : <Counter name={"budi"}/>}
            <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan counter 2
            {/* jadi diatas ini itu kalau menghilangkan tampilan component maka statenya akan terhapus dan kalau ditampilkan lagi
            maka nilainay menajdi defalut awal yaitu 0 */}
        </div>
    )
}






// catatan


// 1. pembacaaan struktur ui itu dimulai dari atas ke bawah dan dari kiri ke kanan



// bagiamna bisa component dinyatakan sama posisi adalah jika 
// Dinyatakan SAMA:
// Jika di Posisi 1 sebelumnya adalah <Counter/> dan setelah re-render di Posisi 1 tetap <Counter/>.

// Dinyatakan BEDA:
// Jika di Posisi 1 sebelumnya adalah <Counter/>, lalu berubah menjadi <Timer/> atau elemen HTML biasa seperti <div />.

// // 🟢 Tipe SAMA: React anggap komponen ini SAMA (State dipertahankan)
// {isSwapped ? <Counter /> : <Counter />}

// // 🔴 Tipe BEDA: React anggap komponen BEDA (State lama dihancurkan, buat baru)
// {isSwapped ? <Counter /> : <Timer />}




// Dinyatakan SAMA:

// Selama silsilah pembungkusnya tidak berubah, React menganggap posisinya sama.

// Dinyatakan BEDA:

// Jika pembungkusnya berubah (misalnya yang satu di dalam <div>, yang satu lagi dimasukkan ke dalam <main>), maka posisinya dianggap berbeda.

// 🟢 Posisi SAMA: Sama-sama Anak ke-1 langsung di bawah <div>
{/* <div>
  {isSwapped ? <Counter /> : <Counter />}
</div>

// 🔴 Posisi BEDA: Jalur silsilahnya beda (div -> section vs div -> main)
<div>
  {isSwapped ? (
    <section><Counter /></section>
  ) : (
    <main><Counter /></main>
  )}
</div> */}


//dan juag props itu tidak memengaruhi state

