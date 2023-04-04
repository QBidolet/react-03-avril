import React, { Component} from 'react';

class Enfant extends Component {
    render(){
        const { data, onButtonClick } = this.props;
        return(
            <div>
                <h2>Composant enfant</h2>
                <p>Data du parent : {data}</p>
                <button onClick={onButtonClick}>
                Changer la donnée du parent</button>
            </div>
        )
    }
}

export default Enfant;
