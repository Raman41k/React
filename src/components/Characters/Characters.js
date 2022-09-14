import React, {useState} from 'react';
import Character from "../Character/Character"

const Characters = () => {

    let [characters,setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results);
        });

    return (
        <div>
            {characters.map(value => <Character character={value} key={value.id}/>)}
        </div>
    );
};

export default Characters;