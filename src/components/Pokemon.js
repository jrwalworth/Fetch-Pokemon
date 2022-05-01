import React, {useState, useEffect} from 'react';

const Pokemon = (props)=> {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            <h2>Pokemon 1-900</h2>
            {pokemon.length > 0 && pokemon.map((pmon, index)=>{
                return (<div key={index}>{index} - {pmon.name.toUpperCase()}</div>)
            })}
        </div>
    )


}



export default Pokemon;