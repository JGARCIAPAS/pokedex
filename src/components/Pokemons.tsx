import React, { useEffect } from "react";
import { useState } from "react";
import '../assets/styles/lcd.css';
import {PokemonData, PokemonEntry} from '../interfaces/pokeinterfaces';

const POKE_ENDPOINT_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_ENDPOINT_URL_ENTRY = 'https://pokeapi.co/api/v2/pokemon-species/';

const Pokemons = () =>{
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [pokemonEntry, setPokemonEntry] = useState<PokemonEntry | null>(null);
    const randomPokemonNumber = () =>{
        const rand = Math.random();
        const range = Math.floor(rand * 151);
        return range + 1;
    } 
    const randomPokemon = randomPokemonNumber();

    useEffect(()=>{
        fetch(`${POKE_ENDPOINT_URL}${randomPokemon}`)
            .then(response=> response.json())
            .then(data => setPokemon(data))
            .catch(error => console.error('Error fetching Pokemon data', error))
        fetch(`${POKE_ENDPOINT_URL_ENTRY}${randomPokemon}`)
            .then(response=> response.json())
            .then(data => setPokemonEntry(data))
            .catch(error => console.error('Error fetching Pokemon entry', error))
    }, []);

    return(
        <div>{pokemon && pokemonEntry ? 
            <div>
                <h1>{pokemon.name} - {pokemonEntry.name}</h1>
                <h2>{pokemon?.sprites.front_default}</h2>
                <h2>{pokemon.id}</h2>
                <h2>{pokemon.height/10}</h2>
                <h2>{pokemon.weight/10}</h2>
                <ul>{pokemon.types.map(type =>(
                    <li key={type?.slot}>{type?.type.name}</li>
                ))}</ul>
                <div>
                    {pokemonEntry.genera.map(genus =>(
                        <div key={genus.language.name}>
                            {genus.language.name === 'es' ? <p>{genus.genus}</p> : ''}
                        </div>  
                    ))}
                </div>
                <div>
                    {pokemonEntry.flavor_text_entries.map(text => (
                        <div key={text.language.name}>
                            {text.language.name === 'es' ? <p>{text.flavor_text}</p>: ''}
                        </div>
                    ))}
                </div>

            </div>: <p>Loading Pokemon data</p>}
        </div>
    )
}
export default Pokemons


    /*     const [pokeList, setPokeList] = useState([]);
    const [getCompletePokemonList, setgetCompletePokemonList] = useState([]);
    let arr:any = [];
    useEffect(()=>{
        fetch(POKE_ENDPOINT_URL)
            .then(response => response.json())
            .then(data => setPokeList(data.results))
    }, []);
    console.log(pokeList)
 */