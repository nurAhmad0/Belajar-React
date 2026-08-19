import { useState } from "react";


export default function Note({note, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);


    const handleChangeText = (e) => {
        const newNote = {...note, text: e.target.value}
        onChange(newNote)
    }


    let component;


    if (isEditing) {
        component = (
            <>
                <input type="text" onChange={handleChangeText} value={note.text}/>
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    }
    else {
        component = (
            <>
                {note.text}
                <button onClick={()  => setIsEditing(true)}>edit</button>
            </>
        )
    }


    const handleChangeDone = (e) => {
        const newNote = {...note, done: e.target.checked}
        onChange(newNote)
    }

    return (
        <label htmlFor="">
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick={() => onDelete(note)}>delete</button>
        </label>
    )
}