import React, {useState} from 'react';

const Contapp = ()=> {

    let [contador, setContador] = useState(0);

    const incrementarApp = ()=>{
        setContador(contador+1);
    }

    const decrementarApp = ()=>{
        setContador(contador-1);
    }

    return(
        <div className="mt-5">
            <button onClick={incrementarApp}>
                Sumar click
            </button>

            <button onClick={decrementarApp}>
                Restar click
            </button>

            <h1>Clicks: {contador}</h1>

        </div>
    );
}

export default Contapp;

