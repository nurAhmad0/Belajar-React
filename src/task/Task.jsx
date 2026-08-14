import { useState } from "react"

export default function Task() {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([])

    const handleCanges = (e) => {
        setItem(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setItems((prevItem) => ([
            ...prevItem,
            item
        ]))
        setItem("")
    }


    return (
        <div>
            <h1>
                Create Task
            </h1>

            <form action="">
                <input type="text" className="text" value={item} onChange={handleCanges}/>
                <button onClick={handleClick}>Add</button>
            </form>

            <h1>
                List Task
            </h1>
            <ul>
                {/* items.map((parameter1, parameter2, parameter3) => { ... }) jadi kalau untuk 
                Parameter Pertama (Wajib): Mewakili isi dari elemen array pada iterasi saat ini.
                Parameter Kedua (Opsional): Mewakili posisi/nomor urut (index) dari elemen tersebut (dimulai dari angka 0).
                Parameter Ketiga (Sangat Jarang Dipakai): Mewakili array utuh itu sendiri yang sedang di-looping. */}
                {items.map((item, index) => 
                    <li key={index}>
                        {item}
                    </li>
                )}
            </ul>
        </div>
    )
}