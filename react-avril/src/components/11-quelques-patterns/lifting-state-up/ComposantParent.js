import React, { useState } from "react";
import ComposantA from './ComposantA';
import ComposantB from './ComposantB';

const ComposantParent = () =>{
    const [valeurPartagee, setValeurPartagee] = useState('')

    return (
        <div>
            <ComposantA valeur={valeurPartagee} setValeur={setValeurPartagee}/>
            <ComposantB valeur={valeurPartagee} setValeur={setValeurPartagee}/>
        </div>
    )
}

export default ComposantParent;