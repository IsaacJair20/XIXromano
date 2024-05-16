import React from 'react'
import Colosseum from '../assets/Colosseum.jpeg'
import './Home.css'


function Home() {
    return (
        <div className="app">
            <div className='presentation'>
                <img src={Colosseum} alt="Coliseo" />
            </div>
            <div className='description'>
                <p>El XIX Romano surge en la busqueda de traer un pedazo de Roma a mexico y fusionar la gastronomia</p>
            </div>
        </div>
    )
}

export default Home