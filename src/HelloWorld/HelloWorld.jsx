import "./HelloWorld.css"

export default function HelloWorld(){
    return (
        <div>
            <HeaderHelloWorld/>
            <ParaHelloWorld/>
        </div>
    )
}



function HeaderHelloWorld(){
    const text = "hai gaesss";
    return (
        <h2 className="title">
            {text}
        </h2>
    )
}

function ParaHelloWorld(){
    const text = "masih belajar framework";
    return (
        <span className="content">
            {text}
        </span>
    )
}



// function HeaderHelloWorld(){
//     const text = "hai gaesss";
//     return (
//         <h2 style={{
//             color: "red",
//             backgroundColor: "aqua"
//         }}>
//             {text}
//         </h2>
//     )
// }

// function ParaHelloWorld(){
//     const text = "masih belajar framework";
//     const style = {
//         color: "blue",
//         backgroundColor: "yellow"
//     }
//     return (
//         <span style={style}>
//             {text}
//         </span>
//     )
// }
// https://react.dev/reference/react/StrictMode
// digunakan untuk mencari masalah dan juga menampilkan komponen di root




// create root
// https://react.dev/reference/react-dom/client/createRoot




