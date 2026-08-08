export default function MyButton({text, onSmash}) {


    return (
        <button onClick={onSmash}>{text}</button>//jadi cuma perlu mengimport dan mengirimkan functionya juga
    )
}