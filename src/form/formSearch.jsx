export default function SearchForm() {
    return (
        <form action="">
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault();
                alert("you search");
            }}>search</button>
        </form>
    )
}




// catatan 
//jaid preventdefault itu digunakan untuk menghentikan action bawaan dari react yang sudha disedikan jadi menggantinya dengan milik kita sendiri




// export default function SearchForm() {
//   function handleSearch(e) {
//     // ✋ HENTIKAN perilaku otomatis browser (mencegah refresh halaman)
//     e.preventDefault(); 

//     // Sekarang kita bisa mengolah data pencarian murni dengan JavaScript/React
//     alert("Proses pencarian dijalankan tanpa refresh halaman!");
//   }

//   return (
//     <form onSubmit={handleSearch}>
//       <input type="text" placeholder="Ketik kata kunci..." />
//       <button type="submit">Cari</button>
//     </form>
//   );
// }



// export default function SafeLink() {
//   function handleLinkClick(e) {
//     // ✋ Batalkan navigasi otomatis dari tag <a>
//     e.preventDefault();

//     const yakin = window.confirm("Apakah kamu yakin ingin meninggalkan halaman ini?");
    
//     if (yakin) {
//       // Jika pengguna setuju, baru kita arahkan manual via JS
//       window.location.href = "https://google.com";
//     }
//   }

//   return (
//     <a href="https://google.com" onClick={handleLinkClick}>
//       Kunjungi Google (Dengan Konfirmasi)
//     </a>
//   );
// }