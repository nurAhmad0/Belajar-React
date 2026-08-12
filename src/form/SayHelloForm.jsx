export default function SayHelloForm() {
    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById("input_nama").value;
        document.getElementById("penerima").innerText = `Hello ${name}`;
    }


    return (
        <div>
            <form action="">
                <input type="text" id="input_nama" />
                <button onClick={handleClick}>say hello</button>
            </form>
            <h2 id="penerima">Hello World</h2>
        </div>
    )
}