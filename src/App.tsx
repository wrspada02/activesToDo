
    import { useState } from 'react';
    import './styles/global.scss';

    export function App(){

        const [cont, setCount] = useState(0);

        function handleChangeCount(){
            setCount(cont + 1);
        }

        return (
            <>
            <h1>Hello</h1>
            <h1>{cont}</h1>
            <button onClick={handleChangeCount}>Click</button>
            </>
        );
    }