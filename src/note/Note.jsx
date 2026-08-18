export default function Note({note, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);


    const handleChangeText = (e) => {
        const newNote = {...note, text: e.target.value}
        onchange(newNote)
    }


    const handleClick = () => {
        setIsEditing(false)
    }

    let component;


    if (isEditing) {
        component = (
            <>
                <input type="text" onChange={handleChangeText} value={note.text}/>
                <button onClick={}>save</button>
            </>
        )
    }
}