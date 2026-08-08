// eventporpagation untuk menghentikan kalau ada div yang memiliki onclick
// lalu didalam div tersebut memiliki sebuah onclick juga
// lalu saat kita pencet button nya maka onclick di button(1) dan div(2) akan aktif 
// jadi untuk menghentikannya itu pakai event propagation








export default function PropButton({onClick}) {
    return (
        <div onClick={onClick}>
            <button onClick={onClick}>satu</button>
            <button onClick={onClick}>dua</button>
        </div>
    )
}