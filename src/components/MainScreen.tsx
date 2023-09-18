import React from "react";
import '../assets/styles/mainScreen.css'
import Pokemons from "./Pokemons";
interface MainScreenProps {
    classOn: string;
}

const MainScreen: React.FC<MainScreenProps> = (MainScreenProps) =>{
    return(
        <div className='frame'>
            <div className='frame-top'>
                <div className={`dark-red-light ${MainScreenProps.classOn}`}></div>
                <div className={`dark-red-light ${MainScreenProps.classOn}`}></div>
            </div>
            <div className={`lcd ${MainScreenProps.classOn}`}>
                {/* COMPONENTE POKEDEX o Berrydex*/}
                <Pokemons/>
                </div>
            <div className='frame-bottom'>
                <div className='turn-light'>
                    <div className={`dark-red-light big-light ${MainScreenProps.classOn}`}></div>
                </div>
                <div className='speaker-screen'>
                    <div className='speaker'>
                        <div className='line-speaker'></div>
                        <div className='line-speaker'></div>
                        <div className='line-speaker'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainScreen;