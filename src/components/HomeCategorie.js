import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/product-image-1993737317_1600x.webp'
import image2 from '../assets/images/Vesteenveloursfemme-2-2.webp'
import image3 from '../assets/images/naig-beige-pantalon-lin-.jpg'

function HomeCategorie() {

    const addEffect = (e) =>{
        const cards = document.querySelectorAll('.categorie-link')
        cards.forEach(card => {
            if (card.name !== e.target.name) {
                card.parentElement.classList.add('filter')
            }
        });
    }

    const removeEffect = (e) =>{
        const cards = document.querySelectorAll('.categorie-link')
        cards.forEach(card => {
            if (card.name !== e.target.name) {
                card.parentElement.classList.remove('filter')
            }
        });
    }

  return (
    <div className='my-5 px-3 px-lg-5'>
        <div className='entete d-flex justify-content-between gap-3'>
            <h2 className='fw-bold'>Top Catégories</h2>
            <button className='myButton-white fw-bold'>Voir les categories</button>
        </div>
        <div className='mt-3 categorie-container'>
            <div className='card-categorie' style={{backgroundImage: `url(${image1})`}}>
                <Link to='/shop' className='categorie-link' onMouseOver={(e)=>addEffect(e)} onMouseOut={(e)=>removeEffect(e)} name="card1">
                    <h1 >Robe</h1>
                </Link>
            </div>
            <div className='card-categorie' style={{backgroundImage: `url(${image2})`}}>
                <Link to='/shop' className='categorie-link' onMouseOver={(e)=>addEffect(e)} onMouseOut={(e)=>removeEffect(e)}  name="card2">
                <h1>Veste</h1>
                    
                </Link>
            </div>
            <div className='card-categorie' style={{backgroundImage: `url(${image3})`}}>
                <Link to='/shop' className='categorie-link' onMouseOver={(e)=>addEffect(e)} onMouseOut={(e)=>removeEffect(e)} name="card3">
                    <h1>Pantalon</h1>
    
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeCategorie