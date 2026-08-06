import {createRoot} from "react-dom/client";
import HelloWorld from "../HelloWorld/HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "../HelloWorld/Container.jsx"
import TodoList from "./TodoList.jsx";



 createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
            </Container>
        </StrictMode>
    )
