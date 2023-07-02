import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer mt-3'>
        <div className='subscribe'>
            <h1 className='text-center text-white fw-bold'>Abonnez-vous à notre newsletter !</h1>
            <div className='input-section'>
                <input type='email' className='input-subscribe' placeholder='bienvenue@gmail.com' ></input>
                <button className='button-subscribe'>S'abonner</button>
            </div>
        </div>
        <div className='footer-info'>
            <div className='d-flex justify-content-center flex-column align-items-center gap-3'>
                <Link to='/' className='logo text-white text-center'>Selling</Link>
                <a target='_blank' href='https://abdfolio.netlify.app' className='myButton' style={{'width':'fit-content','textDecoration':'none'}}>Voir mon portfolio</a>
            </div>
        </div>
        <p className='m-0'>
            © All rights reserved by Abdul Mounirou.
        </p>
    </div>
  )
}

export default Footer