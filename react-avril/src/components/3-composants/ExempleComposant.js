import React, { Component } from 'react';

// Etape 1 : Créer une classe qui étend la classe Component de React.
class ExempleComposant extends Component {

    // Etape 2 : Définir le constructeur pour initialiser
    // l'état local du composant.
    constructor(props) {
        super(props);
        // L'état local est un objet qui stocke les données
        // du composant.
        // Utiliser this.state pour définir l'état initial.
        this.state = {
            message: "Bonjour !"
        }
    }
    
    // Etape 3 : Créer une méthode gérer les actions.
    handleClick = () => {
        this.setState({ message: "Composant React mise à jour !"})
    }

    // Etape 4 : Implémenter la méthode render pour définir
    // l'affichage du composant.

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Cliquez ici</button>
            </div>
        )

    }

}

export default ExempleComposant
