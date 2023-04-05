import React from 'react';

function Film({ title, votes, onVote }){
    return(
        <div>
            <h2>{title}</h2>
            <p>Votes : {votes}</p>
            <button onClick={onVote}>Voter</button>
        </div>
    )
}

export default Film;