import React, { Component } from 'react';

class Binding extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(){
    //     alert("Le contexte est correctement lié : " + this);
    // }

    handleClick = () => {
        alert("Le contexte est correctement lié : "+ this)
    }
    render (){
        return <button onClick={this.handleClick}>Cliquez ici</button>
    }
}

export default Binding;