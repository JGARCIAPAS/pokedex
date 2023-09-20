import React, { useEffect, useState } from "react";
import { BerryData, BerryEntry } from "../interfaces/berryinterfaces";
import Loading from "./Loading";

const BERRI_ENDPOINT_URL = 'https://pokeapi.co/api/v2/berry/';
   
const Berries = () => {
    const [berryUrl, setBerryUrl] = useState<BerryData | null>(null);
    const [berry, setBerry] = useState<BerryEntry | null>(null);
    const randomBerryNumber = () => {
        const rand = Math.random();
        const range = Math.floor(rand * 64);
        return range + 1;
    }
    
    const randomBerry = randomBerryNumber();

    useEffect(()=>{
        fetch(`${BERRI_ENDPOINT_URL}${randomBerry}`)
            .then(response => response.json())
            .then(data => {setBerryUrl(data) 
                return fetch(data.item.url)})
            .then(response => response.json())
            .then(data => setBerry(data))
            .catch(error => console.error('Error fetching berry data', error))
    }, []);

    return(
       <div>{berryUrl && berry ?     
            <div className='full-info'>
                <div className='poke-info'>
                    <div className='main-info'>
                        {berry.names.map((name, index)=>(
                                <div key={index}>
                                    {name.language.name === 'es' ? <h1>{name.name}</h1>: ''}
                                </div>
                            ))}             
                        <img src={berry.sprites.default}/>
                    </div>
                    <div className='extended-info'>
                        <h2>Nº.{berryUrl.id}</h2>
                        <h3><p className='height'>Tamaño:</p><p className='data-height'> {berryUrl.size / 10} cm</p></h3>
                    </div>
                </div>
                <div className='full-text-info berry-text'>
                    {berry.flavor_text_entries.map((text, index)=>(
                        <div key={index}>
                            {text.language.name === 'es' ? <p>{text.text}</p>:''}
                        </div>
                    ))}
                </div>
            </div>:<Loading/>}
       </div>
    )
}
export default Berries;