import React from "react";
import '../assets/styles/mainScreen.css'

const MainScreen = () =>{
    return(
        <div className='frame'>
            <div className='frame-top'>
                <div className='dark-red-light'></div>
                <div className='dark-red-light'></div>
            </div>
            <div className='lcd'></div>
            <div className='frame-bottom'>
                <div className='turn-light'>
                    <div className='dark-red-light big-light'></div>
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