export default function ProfileForm({name, setName}) {
    const handleChange = (e) => {
        setName(e.target.value)
    }


    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" name="" id="" value={name} onChange={handleChange}/>
        </>
    )
}