export default function TaskList({items = []}) {

    return (
        <div>
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