import {createRoot} from "react-dom/client";
import HelloWorld from "../HelloWorld/HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "../HelloWorld/Container.jsx"
import TodoList from "../TODO/TodoList.jsx";
import Table from "../Table/Table.jsx";



 createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
            </Container>
        </StrictMode>
    )
