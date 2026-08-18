import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import CounterApp from "./counterApp";
import CounterAppC from "./counterAppC";
import CounterAppBeda from "./counterAppBeda";






 createRoot(document.getElementById("root"))
    .render(
        <StrictMode> 
            <CounterApp/>
            <CounterAppC/>
            <CounterAppBeda/>
        </StrictMode>
    )
