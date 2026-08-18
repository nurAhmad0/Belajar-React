import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const InitialNotes = [
    {id: id++, text: "belajar html", done: false},
    {id: id++, text: "belajar css", done: false},
    {id: id++, text: "belajar js", done: false},
    {id: id++, text: "belajar react", done: false}
]


export default function NoteApp() {
    const [notes, setNotes] = useState(InitialNotes);

    const handleAddNote = (text) => {
        setNotes((nilaiData) => ([...nilaiData, {id: id++, text: text, done: false}]))
    } 

    const handleChangeNote = (note) => {
        setNotes((dataNote) => 
            {
                // const indexHasil = dataNote.findIndex((objek) => objek.id === note.id)
                // dataNote[indexHasil] = note; 
                // ini tidak boleh karena langsung mengubah data array langsung

                return dataNote.map((item) =>
                    item.id === note.id ? note : item
                )
            })
    }
    // jadi lebih baik pakai filter karean serba guna

    const handleDeleteNote = (note) => {
        setNotes((dataNote) => 
        {
            return dataNote.filter((data) => data.id !== note.id)
        })
    }


    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}