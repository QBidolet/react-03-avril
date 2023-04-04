import React, { useState} from "react";

function FonctionCounter(){
    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <h1>Compteur avec Hooks.</h1>
            <p>Compteur : {count}</p>
            <button onClick={incrementCount}>Incrémenter</button>
        </div>
    )

}

export default FonctionCounter;