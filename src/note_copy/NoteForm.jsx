import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") return;
    dispatch({
      type: "ADD_NOTE",
      text: text
    });
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Note"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}