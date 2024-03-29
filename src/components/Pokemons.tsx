import React, { useEffect } from "react";
import { useState } from "react";
import {PokemonData, PokemonEntry} from '../interfaces/pokeinterfaces';
import Loading from "./Loading";
import '../assets/styles/lcd.css';

const POKE_ENDPOINT_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_ENDPOINT_URL_ENTRY = 'https://pokeapi.co/api/v2/pokemon-species/';

const Pokemons = () =>{
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [pokemonEntry, setPokemonEntry] = useState<PokemonEntry | null>(null);
    const randomPokemonNumber = () =>{
        const rand = Math.random();
        const range = Math.floor(rand * 905);//151
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
            <div className='full-info'>
                <div className='poke-info'>
                    <div className='main-info'>
                        <h1>{pokemon.name}</h1>
                        <div>
                            {pokemonEntry.genera.map((genus, index) =>(
                                <div key={index}>
                                    {genus.language.name === 'es' ? <p>{genus.genus}</p> : ''}
                                </div>  
                            ))}
                        </div>
                        <img src={pokemon?.sprites.front_default}/>
                    </div>
                    <div className='extended-info'>
                    <h2>Nº.{pokemon.id}</h2>
                        <ul>{pokemon.types.map(type =>(
                            <li key={type?.slot} className={type?.type.name}>{type?.type.name}</li>
                        ))}</ul>
                        <h3><p className='height'>Altura:</p><p className='data-height'>{pokemon.height/10} m</p></h3>
                        <h3><p className='weight'>Peso:</p> <p className='data-weight'>{pokemon.weight/10} Kg</p></h3>
                    </div>
                </div>
                <div className='full-text-info'>
                    {pokemonEntry.flavor_text_entries.map((text, index) => (
                        <div key={index}>
                            {text.language.name === 'es' ? <p>{text.flavor_text}</p>: ''}
                        </div>
                    ))}
                </div>
            </div>: <Loading/>}
        </div>
    )
}
export default Pokemons