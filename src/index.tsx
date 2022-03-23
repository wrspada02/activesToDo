    import React from 'react'; // Tenho que importar o react no arquivo raiz 
    import ReactDOM from "react-dom";
    import { App } from "./App";

    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );