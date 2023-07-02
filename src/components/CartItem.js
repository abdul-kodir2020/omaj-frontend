import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'

function CartItem(props) {
    const {removeFromCart, setItemNb} = useContext(CartContext)
    const [compt, setCompt] = useState(props.produit.nb)
    const probleme = (e) =>{
        
        console.warn(compt, e.target.value)
        if (compt > e.target.value) {
            setItemNb(props.produit, compt, false);
        }else{
            setItemNb(props.produit, compt, true);
        }
        setCompt(e.target.value);
    }

    useEffect(()=>{
        setCompt(props.produit.nb)
    },[props.produit.nb])
  return (
    <div className='d-flex gap-3'>
        <img className='' src={props.produit.lien_image} alt='' width="70"></img>
        <div>
            <h5 className='fw-bold m-0' style={{fontSize: '18px'}}>{props.produit.libelle}</h5>
            <h5 className='m-0' style={{fontSize: '17px'}}>{props.produit.prix} € - <span className='text-muted text-decoration-line-through'>{props.produit.prix + 20} €</span></h5>
            <h5 className='m-0' style={{fontSize: '17px'}}>Taille: {props.produit.taille}</h5>
            <a className='remove' type='button' onClick={()=>removeFromCart(props.produit)} style={{fontSize: '17px'}}>Supprimer</a>
        </div>
        <input className='h-50 ms-auto' style={{fontSize: '18px'}} type='number' min={0} value={compt} onChange={(e)=>probleme(e)} ></input>
    </div>
  )
}

export default CartItem