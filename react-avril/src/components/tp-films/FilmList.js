import React, { useState, useContext } from 'react';
import Film from './Film';
import { FilmContext } from './FilmContext';

function FilmList(){
    const {films, handleVote} = useContext(FilmContext);

    return (
        <div>
            {films.map((film, index) => (
                <Film
                key={index}
                title={film.title}
                votes={film.votes}
                onVote={() => handleVote(index)}
                />
            ))}
        </div>
    )
}

export default FilmList;