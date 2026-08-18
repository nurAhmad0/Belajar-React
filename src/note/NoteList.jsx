import Note from "./Note";

export default function NoteList({notes, onChange, onDelete}) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={Note} onChange={onChange} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    )

}