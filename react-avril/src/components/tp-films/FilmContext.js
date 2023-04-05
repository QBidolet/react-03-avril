import React, { createContext, useState } from 'react';

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([
        { title: "Film 1", votes: 0},
        { title: "Film 2", votes: 0},
        { title: "Film 3", votes: 0}
    ])

    const handleVote = (index) => {
        const newFilms = [...films];
        newFilms[index].votes += 1;
        setFilms(newFilms);
    }

    return (
        <FilmContext.Provider value={{films, handleVote}}>
            {children}
        </FilmContext.Provider>
    )
}

