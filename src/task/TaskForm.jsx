import { useState } from "react"






//cara satu
export default function TaskForm({onSubmit}) {
    const [item, setItem] = useState("");


    const handleCanges = (e) => {
        setItem(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        onSubmit(item);
        setItem("");
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
        </div>
    )
}








// cara dua
// export default function TaskForm({setItems}) {
//     const [item, setItem] = useState("");


//     const handleCanges = (e) => {
//         setItem(e.target.value);
//     }

//     const handleClick = (e) => {
//         e.preventDefault();
//         setItems((prevItem) => ([
//             ...prevItem,
//             item
//         ]));
//         setItem("");
//     }


//     return (
//         <div>
//             <h1>
//                 Create Task
//             </h1>

//             <form action="">
//                 <input type="text" className="text" value={item} onChange={handleCanges}/>
//                 <button onClick={handleClick}>Add</button>
//             </form>
//         </div>
//     )
// }