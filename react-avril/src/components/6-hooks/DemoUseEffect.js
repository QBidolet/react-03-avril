import React, { useState, useEffect } from 'react';

function DemoUseEffect(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // Exécution à chaque render
    useEffect(()=>{
        console.log("Mise à jour du titre à chaque render");
        document.title = `Compteur : ${count}`
    });

    // Exécuter uniquement au montage et démontage
    useEffect(()=>{
        console.log("Exécuté une seule fois, au montage.")
        return () => {
            console.log("Exécuté au démontage.")
        }
    }, []); // tableau dépendance, 
    //dans ce cas il n'y a pas de dépendance

    // Exécuter à chaque que count change
    useEffect(()=>{
        console.log("Exécuté lorsque le compteur change.")
    }, [count]);

    useEffect(()=>{
        console.log("Exécuté lorsque le nom change.")
    }, [name]);

    return (
        <div>
            <input 
            type="text" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Nom'></input>
            <button onClick={()=>setCount(count+1)}>
            Compteur : {count}
            </button>       
        </div>
    )
}

export default DemoUseEffect;