import React from 'react'
import { Link } from 'react-router-dom'
import HomeCategorie from '../components/HomeCategorie'

function Home() {
  return (
    <div className='home'>
        <div className='hero'> 
            <div className='hero-section'>
                <h1 className='hero-title'>La mode à petit prix</h1>
                <Link to='shop' className='myButton' style={{'width':'fit-content','textDecoration':'none'}}>SHOP</Link>
            </div>
            <div className='hero-image'>
            </div>
        </div>
        <HomeCategorie/>
    </div>
  )
}

export default Home