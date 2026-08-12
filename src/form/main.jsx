import {createRoot} from "react-dom/client";
import HelloWorld from "../HelloWorld/HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "../HelloWorld/Container.jsx"
import TodoList from "../TODO/TodoList.jsx";
import Table from "../Table/Table.jsx";
import AlertButton from "../button/alertButton.jsx";
import MyButton from "../button/myButton.jsx";
import EventButton from "../button/eventButton.jsx";
import PropButton from "../button/proButton.jsx";
import SearchForm from "./formSearch.jsx";
import SayHelloForm from "./SayHelloForm.jsx";
import Counter from "./stateForm.jsx";
import Counter3 from "./stateFormC.jsx";



 createRoot(document.getElementById("root"))
    .render(
        <StrictMode> 
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>

                <AlertButton text={"Click saya untuk menampilkan pemberitahuan"} massage={"hai orang biasa"}/>
                <MyButton text={"hai click saya dengn function"} onSmash={() => alert("hai ini dengan ufnction di luar")}/>
                <EventButton text={"click saya ini event"} massage={"Event muncul"}/>
                <PropButton onClick={(e) => {
                    e.stopPropagation();//digunakan untuk menghentikan default action
                    console.info(e.currentTarget)
                    }
                }/>

                <SearchForm/>

                <SayHelloForm/>

                <Counter/>
                <Counter/>
                <Counter3/>
                <Counter3/>
            </Container>
        </StrictMode>
    )
