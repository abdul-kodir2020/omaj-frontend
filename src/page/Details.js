import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../CartContext'

function Details() {
    const location = useLocation()
    const currentProduit = Number(location.pathname.split('/')[2])
    const [produit, setProduit] = useState()
    const [nombreDeProduits, setNombreDeProduits] = useState(1)
    const {cartItems,addToCart} = useContext(CartContext)

    useEffect(()=>{
        const getProduit = async()=>{
            await axios.get('http://localhost:5000/api/produits/'+currentProduit, {
                headers: {
                    token: 'ytgjgjsdc54365f4vdf5'
                }
            })
            .then((response)=>setProduit(response.data))
            .catch((err)=>console.log(err))
        }
        getProduit()
        console.log(cartItems)
    },[])

    const handleClick = (produit) =>{
        if(nombreDeProduits !== 0) addToCart({...produit, nb:nombreDeProduits})
    }
  return (
    <div className='p-3 p-lg-5 produit-page'>
        <div className='produit-image'>
            <img className='' src={produit?.lien_image} alt=''/>
        </div>
        <div className='produit-description'>
            <p className='title'>{produit?.libelle}</p>
            <p className='price'>{produit?.prix} € - <span className='old'>{produit?.prix + 20} €</span></p>
            <p className='description'>Très bon état : Aucun défaut relevé par notre équipe</p>
            <hr></hr>
            <h5><span className='fw-bold'>Marque :</span> {produit?.marque}</h5>
            <h5><span className='fw-bold'>Taille :</span> {produit?.taille}</h5>
            <h5 className='fw-bold text-success'>En stock</h5>
            <div className='border border-dark p-1 d-flex justify-content-between'>
                <input type='number' min={0} value={nombreDeProduits} onChange={(e)=>setNombreDeProduits(Number(e.target.value))}></input>
                <button className='myButton' onClick={()=>handleClick(produit)} >Ajouter au panier</button>
            </div>
            
        </div>
    </div>
  )
}

export default Details