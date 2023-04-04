import React, { Component }  from 'react';

class CycleDeVie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        console.log('1. Constructeur - Inialisation du composant.');
    }

    componentDidMount() {
        console.log("3. componentDidMount : Le composant est monté.");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("4. shouldComponenttUpdate : Détermine si le composant doit être mis à jour.")
        return true;
    }
    componentDidUpdate(prevProps, prevState){
        console.log("5. componentDidUpdate : Le composant est mis à jour");
        console.log("Ancien état :", prevState);
        console.log("Nouvel état :", this.state);
    }

    componentWillUnmount() {
        console.log("6. componentWillUnmount : Le composant va être démonté.")
        // Utilisé pour le nettoyage des ressources, annuler des abonnements etc.
    }

    incrementCounter = () => {
        this.setState((prevState)=>({ counter: prevState.counter + 1}));
    }

    render (){
        console.log("2. render : Rendu du composant.")
        const {counter} = this.state;

        return (
            <div>
                <h1>Démonstration du cycle de vie d'un composant.</h1>
                <p>Compteur : { counter }</p>
                <button onClick={this.incrementCounter}>
                Incrémenter</button>
            </div>
        )
    }
    
}

export default CycleDeVie