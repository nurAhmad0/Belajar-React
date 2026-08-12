// jadi component seharusnya di jadikan bentuk murni jadi tidka boleh memengaruhi keluar component 
// jadi state itu adalah memeory spesifik di component 
// jadi state di gunakan untuk mengingat nilai pada saat ini bisa jadi gambar atau teks atau yang lain

// sebgai catatan local variabel itu tidak bisa dijadikan state kalau di render ulang maka akan kembali ke nilai awal
// https://react.dev/reference/react/useState


//const [state, setState] = useState(initialState) ini untuk rumusnya itu 
// state itu adalah data statenya
// setstate itu adalah function yang digunakan untuk mengubah data state



// export default function Counter() {
//     let counter = 0;

//     const handleIncrement = () => {
//         counter++;
//         console.log(counter)
//     }
//     return (
//         <div>
//             <button onClick={handleIncrement}>naik</button>

//             <h1>Counter: {counter}</h1>
//         </div>
//     )
// }


import {useState} from "react";
export default function Counter() {
    let [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        const nextCounter = counter + 1; //ini digunakan untuk melihat counter yang saat ini berubah jadi mengikuti dengan h1 yang dibawah jadi biar tidak delay
        setCounter(nextCounter);
        console.log(nextCounter);
    }
    return (
        <div>
            <button onClick={handleIncrement}>naik</button>

            <h1>Counter: {counter}</h1>
        </div>
    )
}




