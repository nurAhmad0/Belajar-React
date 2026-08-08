export default function EventButton({text, massage}) {
    function handleClick(e) {
        console.info(e.target);
        alert(massage)
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}



// import { useState } from "react";

// export default function FormKetuk() {
//   const [teks, setTeks] = useState("");

//   // 'e' di sini adalah EVENT OBJECT yang dikirim otomatis oleh browser/React
//   function handleKetik(e) {
//     // e.target        -> Elemen <input> tempat pengguna mengetik
//     // e.target.value  -> Teks terkini yang ada di dalam <input>
//     setTeks(e.target.value);
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Membaca Input dengan Event Object</h3>
//       <input 
//         type="text" 
//         onChange={handleKetik} 
//         placeholder="Ketik sesuatu di sini..." 
//       />
//       <p>Hasil ketikan: <strong>{teks}</strong></p>
//     </div>
//   );
// }





// export default function FormLogin() {
//   function handleSubmit(e) {
//     // Mencegah halaman ter-refresh saat form dikirim dna data yang sudah di isi hilang
//     e.preventDefault(); 
    
//     alert("Form berhasil dikirim tanpa refresh halaman!");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Username" />
//       <button type="submit">Kirim</button>
//     </form>
//   );
// }