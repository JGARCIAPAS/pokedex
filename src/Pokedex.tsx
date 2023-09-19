import React, { useEffect, useState } from "react";
import './assets/styles/pokedex.css'
import MainScreen from "./components/MainScreen";

const Pokedex = () =>{
    const [isOn, setIsOn] = useState(false);
    const audio = new Audio('./sound/blink.mp3')
    const turnOnOff = () =>{
        audio.play();
        setIsOn(!isOn);
    }
    const classOn = isOn? 'turned-on': '';
    return(
        <div className='pokedex'>
            <div className='pokedex-header'>
                <div className='header-top'>
                    <div className={`big-light ${classOn}`}></div>
                    <div className='group-lights'>
                            <div className={`red-light ${classOn}`}></div>
                            <div className={`yellow-light ${classOn}`}></div>
                            <div className={`green-light ${classOn}`}></div>
                        </div>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'></div>
                    <div className='header-bottom-center'></div>
                    <div className='header-bottom-right'></div>
                </div>
            </div>
            <div className='pokedex-body'>
                <MainScreen classOn={classOn} />
                <div className='buttons-zone'>
                    <div className='main-btns'>
                        <div className='turn-btn'>
                            <button onClick={turnOnOff}><i className="fa-solid fa-power-off power-off"></i></button>
                        </div>
                        <div className='middle-btns'>
                            <div className='top-btns'>
                                <div className='btn-pokemon'>
                                    <button></button>
                                    <p>Pokédex</p>
                                </div>
                                <div className='btn-berries'>
                                    <button></button>
                                    <p>Berrydex</p>
                                </div>
                            </div>
                            <div className='mini-screen'>
                                <div>
                                    <div className='blink'>
                                        <p className={`ink-text ${classOn}`}>Las palabras del profesor Oak resuenan: ¡Los botones del pad estan dañados! ¡Usa el táctil!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-btns'>
                        <div className='crosspiece'>
                            <div className='cross-up'>
                                <button><i className="fa-solid fa-caret-up arrow"></i></button>
                            </div>
                            <div className='cross-center'>
                                <button><i className="fa-solid fa-caret-left arrow"></i></button>
                                <button><i className="fa-solid fa-caret-right arrow"></i></button>
                            </div>
                            <div className='cross-down'>
                                <button><i className="fa-solid fa-caret-down arrow"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pokedex-footer'></div>  
        </div>
    )
}
export default Pokedex