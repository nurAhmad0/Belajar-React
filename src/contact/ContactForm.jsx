import { useState } from "react"

const initialData = {
    name: "",
    massage: ""
}



export default function ContactForm() {
    const [contact, setContact] = useState(initialData)

    const handleNameChanges = (e) => (
        setContact({
            ...contact,
            name: e.target.value
        })
    )
    
    const handleMassgesChanges = (e) => (
        setContact({
            ...contact,
            massage: e.target.value
        })
    )

    return (
        <div>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChanges}/>
                <br />
                <input type="text" placeholder="Massages" value={contact.massage} onChange={handleMassgesChanges}/> 
                {/* onchanges itu setiap kali melakukan perubhan yaitu menambhakan atau menghapus kata maka pasti akan menajlakan function tersebut dan melakukan render */}
            </form>

            <h1>Contact Detail</h1>

            <p>name: {contact.name}</p>
            <p>massage: {contact.massage}</p>
        </div>
    )
}

















// catatan ini 









//ini itu adalah contoh yang salah
// const [user, setUser] = useState({ name: "Osama", age: 20 });

// const handleUpdate = () => {
//   // 🔴 SALAH: Mengubah isi properti object 'user' secara langsung
//   user.name = "Mohamad"; 
  
//   // Memanggil setUser dengan object yang alamat memorinya sama persis
//   setUser(user); 
// };















// ini dalaha contoh kala berdasarakn objek sebelumnya yang sduah terdaftar

// const handleIncreaseAge = () => {
//   setUser((prevUser) => ({
//     ...prevUser,           // Salin data user sebelumnya
//     age: prevUser.age + 1  // Tambah umur +1
//   }));
// };





// ini adalah contoh kalau nested objek 
// const [user, setUser] = useState({
//   name: "Osama",
//   address: {
//     city: "Jember",
//     country: "Indonesia"
//   }
// });

// // Mengubah kota 'city' menjadi 'Banyuwangi'
// const handleUpdateCity = () => {
//   setUser({
//     ...user, // Salin layer luar (name)
//     address: {
//       ...user.address, // Salin layer dalam (country)
//       city: "Banyuwangi" // Timpa properti city
//     }
//   });
// };