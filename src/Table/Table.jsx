import Row from "./Rows.jsx"

export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row id="1" text="satu"/>
                <Row id="2" text="dua"/>
                <Row id="3" text="tiga"/>
                <Row id="4" text="empat"/>
            </tbody>
        </table>
    )
}






//kalau tetap mau untuk membuat efek samping dari non pure function ada tempatnya
// yaitu bisa di event handler yang sudah disiapkan oleh react
// tempatevent handler itu adalah aksi yang terjadi ketiak kita berinteraksi dengan component


//https://react.dev/reference/react-dom/components/common
//jenis jenis evet handler yang bsia ditambhahkan