export default function AlertButton({text, massage}) {
    function handleClick() {
        alert(massage)
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}