import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer, useState } from "react";

let id = 0;
const InitialNotes = [
    {id: id++, text: "belajar html", done: false},
    {id: id++, text: "belajar css", done: false},
    {id: id++, text: "belajar js", done: false},
    {id: id++, text: "belajar react", done: false}
]



function noteReducer(notes, action){
    switch(action.type){
        case "ADD_NOTE" :
            return [...notes, {id: id++, text: action.text, done: false}]
        case "CHANGE_NOTE" :
            return notes.map((note) => note.id === action.id ? {...note, text: action.text, done: action.done} : note) 
        case "DELETE_NOTE" :
            return notes.filter((data) => data.id !== action.id)
        default:
            return notes

    }
}

export default function NoteApp() {
    // const [notes, setNotes] = useState(InitialNotes);// ini dipakai kaau state
    const [notes, dispatch] = useReducer(noteReducer, InitialNotes);

    const handleAddNote = (text) => {
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
        // diatas ini kalu pakai reducer
        
        
        
        
        // setNotes((nilaiData) => ([...nilaiData, {id: id++, text: text, done: false}])) 
        // diatas ini itu adalah menggunnakan state
        
    } 
    
    const handleChangeNote = (note) => {
        
        dispatch({
            ...note,
            type: "CHANGE_NOTE"
            
        })
        // diatas ini kalu pakai reducer
        
        
        
        
        
        
        
        // setNotes((dataNote) => 
            //     {
        //         // const indexHasil = dataNote.findIndex((objek) => objek.id === note.id)
        //         // dataNote[indexHasil] = note; 
        //         // ini tidak boleh karena langsung mengubah data array langsung
        
        //         return dataNote.map((item) =>
            //             item.id === note.id ? note : item
        //         )
        //     })
        
        // diatas ini itu menggunakan state
    }
    // jadi lebih baik pakai filter karean serba guna
    
    const handleDeleteNote = (note) => {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
            
        })
        // diatas ini kalu pakai reducer












        // setNotes((dataNote) => 
            // {
        //     return dataNote.filter((data) => data.id !== note.id)
        // })

        // diatas in itu menggunakan state
    }


    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}






// ===============================catatan===============================

// 1. reducer adalah kode yang mana kita menyimpan logic kita 
// 2. reducer funtion memiliki dua parameter, state saat ini dan action objek
// 3. retunr reducer adalah state selanjutnya
