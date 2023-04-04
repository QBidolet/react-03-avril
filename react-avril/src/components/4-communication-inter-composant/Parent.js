import React, { Component } from 'react';
import Enfant from './Enfant';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            data: "Données initiales."
        }
    }

    handleButtonClick = () => {
        this.setState({data: 'Données modifiées.'})
    }

    render(){
        const { data } = this.state;
        return (
            <div>
                <h1>Composant parent</h1>
                <p>Data: {data}</p>
                <Enfant data={data} 
                onButtonClick={this.handleButtonClick}/>
            </div>
        )
    }
}

export default Parent;