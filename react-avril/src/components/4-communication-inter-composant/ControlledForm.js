import React, { Component } from 'react';

class ControlledForm extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event){
        alert("La valeur soumise est : " + this.state.inputValue);
        event.preventDefault();
    }

    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                    <input type="text" value={this.state.inputValue}
                    onChange={this.handleChange}></input>
                    <input type="submit" value="Envoyer"></input>
                </label>
            </form>
        )
    }
}

export default ControlledForm;