import {createRoot} from "react-dom/client";
import HelloWorld from "../HelloWorld/HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "../HelloWorld/Container.jsx"
import TodoList from "../TODO/TodoList.jsx";
import Table from "../Table/Table.jsx";
import AlertButton from "./alertButton.jsx";
import MyButton from "./myButton.jsx";
import EventButton from "./eventButton.jsx";
import PropButton from "./proButton.jsx";



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
                    e.stopPropagation();
                    console.info(e.currentTarget)
                    }
                }/>

            </Container>
        </StrictMode>
    )
