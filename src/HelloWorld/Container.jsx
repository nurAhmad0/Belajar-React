import { Children } from "react";
import "./HelloWorld.css"

export default function Container({children}) {
    return (
        <div>
            <h1 className="title">PROGAMMER BIASA AJA</h1>
            {children}
            <footer>
                <p>======================================================</p>
            </footer>
        </div>
    )
}