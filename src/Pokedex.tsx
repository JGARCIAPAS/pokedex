import React, { useEffect, useState } from "react";
import './assets/styles/pokedex.css'


const POKE_ENDPOINT_URL = 'https://pokeapi.co/api/v2/pokemon/'
const Pokedex = () =>{
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
    
    return(
        <div className='pokedex'>
            <div className='pokedex-header'>
                <div className='header-top'>
                    <div className='big-light'></div>
                    <div className='group-lights'>
                            <div className='red-light'></div>
                            <div className='yellow-light'></div>
                            <div className='green-light'></div>
                        </div>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'></div>
                    <div className='header-bottom-center'></div>
                    <div className='header-bottom-right'></div>
                </div>
            </div>
            <div className='pokedex-body'>
                {/* componente pokedexScreen */}
            </div>
            <div className='pokedex-footer'></div>  
        </div>
    )
}
export default Pokedex