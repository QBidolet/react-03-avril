import React, { Component } from 'react';

class SwapiCharacter extends Component {
    constructor(props){
        super(props);
        this.state = {
            character: null,
            isLoading: true
        }
    }

    componentDidMount(){
        fetch('https://swapi.dev/api/people/1')
        .then((response)=> response.json())
        .then((data)=> this.setState({
            character: data,
            isLoading: false
        })).catch(
            (error) => console.error('Erreur lors de la récupération des données.', error)
            );
    }

    render() {
        const {isLoading, character} = this.state;
        if (isLoading) {
            return <p>Chargement des données ...</p>
        }
        return (
            <div> 
                {/* Affichage des données de l'API.*/}
                <h1>Personnage Star Wars</h1>
                <p>Nom : {character.name}</p>
                <p>Année de naissance : {character.birth_year}</p>
                <p>Taille : {character.height} cm</p>
            </div>
        )
    }
}

export default SwapiCharacter;