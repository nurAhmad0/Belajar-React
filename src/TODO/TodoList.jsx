import Todo from "./Todo.jsx"

export default function TodoList() {
    const data = [
        {
            id: 1,
            text: "Belajar html",
            isCompleted: true
        },
        {
            id: 2,
            text: "Belajar css",
            isCompleted: false
        },
        {
            id: 3,
            text: "Belajar js",
            isCompleted: true
        },
        {
            id: 4,
            text: "Belajar frameWork",
            isCompleted: true
        }
    ];

    // const TODOS = data.map((todo) => { 
    //     return <Todo key={todo.id} {...todo}/>
    // })
    //ini mengmabil satu satu darii data objek diarray untuk dimasukkan kedalam <Todo> 
    // kenapa pakai ...todo karean untuk menerima obejk data mentah dan memasukkan nya menjadi element lalau dimasukkan kedalam TODOS
    //jika pakai {} itu harus ada return dan ini digunakan jika ada logika lain selain mengembailkan nilai seperti variabel, console atau yang lain
    //pakai () untuk lagsung return tapi hanya untuk return saja logika didalmnya

    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo}/>
            ))}
        </ul>
    )
}