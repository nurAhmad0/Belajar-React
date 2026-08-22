import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  const handleChangeText = (e) => {
    dispatch({
      type: "CHANGE_NOTE",
      note: {
        ...note,
        text: e.target.value
      }
    });
  };

  const handleChangeDone = (e) => {
    dispatch({
      type: "CHANGE_NOTE",
      note: {
        ...note,
        done: e.target.checked
      }
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id
    });
  };

  let component;

  if (isEditing) {
    component = (
      <>
        <input type="text" onChange={handleChangeText} value={note.text} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}