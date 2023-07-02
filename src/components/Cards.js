import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {


  return (
    <Link to={'/shop/'+props.id} className='card-link mb-4'>
        <div className='card'>
                <div className='section-image'>
                    <img className='' src={props.image} alt=''/>
                </div>
                <div className='section-description d-flex flex-column justify-content-between'>
                    <h4 className='p-0 m-0'>{props.titre}</h4>
                    <p className='p-0 m-0'>{props.prix}€</p>
                </div>
        </div>
    </Link>
  )
}

export default Cards