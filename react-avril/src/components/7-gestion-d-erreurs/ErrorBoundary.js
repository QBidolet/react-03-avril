import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
    }

    // Cette méthode statique est appelé lorsqu'une erreur
    // est intercepté dans un composant enfant.
    // On peut mettre à jour l'état local pour indiquer
    // qu'une erreur s'est produite.
    static getDerivedStateFromError(error){
        return  {hasError: true, error}
    }

    // est appelée après que l'erreur ait été intercepté.
    // On peut l'utiliser l'erreur dans un service de rapport d'erreurs
    // ou effectuer des opérations particulières.
    componentDidCatch(error, errorInfo){
        console.error('Une erre s\'est produite:', error, errorInfo);
        // envoyer les logs sur un serveur, envoyer un mail ...
    }

    render(){
        // Si une erreur s'est produite, afficher un message,
        // modal, etc.
        if (this.state.hasError){
            return <h1>Quelque chose s'est mal passé.</h1>
        }

        // Si aucune erreur ne s'est produite.
        return this.props.children;
    }
}

export default ErrorBoundary;