import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;
const InitialNotes = [
  { id: id++, text: "belajar html", done: false },
  { id: id++, text: "belajar css", done: false },
  { id: id++, text: "belajar js", done: false },
  { id: id++, text: "belajar react", done: false }
];

function noteReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...notes, { id: id++, text: action.text, done: false }];
    case "CHANGE_NOTE":
      return notes.map((note) =>
        note.id === action.note.id ? action.note : note
      );
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id);
    default:
      return notes;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useReducer(noteReducer, InitialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <div>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </div>
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}