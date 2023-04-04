import React, { Component } from 'react';

class ExempleJSX extends Component {
    constructor(props){
        super(props);
        this.state = {
            utilisateur: {
                prenom: 'John',
                nom: 'Doe'
            },
            items: ["Pomme", "Banane", "Kiwi"]
        }
    }
    render () {
        const { utilisateur, items} = this.state;

        const message = utilisateur ?
         `Bonjour, ${utilisateur.nom}!` 
         : "Veuillez vous connecter."

         return (
            <div>
                <h1>Exemple JSX</h1>
                {/* Affichage d'une variable conditionnel */}
                <p>{message}</p>

                {/* Affichage d'une liste*/}
                <ul>
                {
                    items.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
                </ul>

                {/* Inline style */}px
                <p style={{ color: 'blue', backgroundColor: "yellow", fontSize: "18px"}}>
                    Texte avec du style
                </p>

                {/* Gérer un événement inline*/}
                <button onClick={()=>alert("Bouton cliqué !")}>Cliquez ici</button>
            </div>
         )
    }
}

export default ExempleJSX;