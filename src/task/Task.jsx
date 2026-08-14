import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export default function Task() {
    const [items, setItems] = useState([])
    

    // jadi yag termasuk dalam share state itu adalah items ini karean
    // TaskForm itu menembhakh data ke dalam Items dan 
    // TaskList itu menmpilkan data dari Items




    //cara satu
    const handleOnSubmit = (item) => {
        setItems((prevItem) => ([
            ...prevItem,
            item
        ]))
    }


    


    return (
        <div>
            {/* <TaskForm setItems={setItems}/> */}
            <TaskForm onSubmit={handleOnSubmit}/>
            <TaskList items={items}/>
        </div>
    )
}