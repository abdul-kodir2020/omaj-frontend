import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { TagContext } from '../Context'

function Liste() {
    const [liste, setListe] = useState()
    const {tag} = useContext(TagContext)
    

    useEffect(()=>{
        const getStudents = async ()=>{
            await axios.get("http://localhost:5000/api/produits"+(tag==="tous les articles"?"":"?categorie="+tag),{
                headers:{
                    token: 'ytgjgjsdc54365f4vdf5'
                }
            })
            .then((response) => {setListe(response.data); console.log(response)})
            .catch((err)=>console.log(err))
        }
        getStudents()
    },[tag])
  return (
    <>  
        <h3 className='mx-3 mx-lg-5 mt-4'>Nombres d'articles : <span>{liste?.length}</span></h3>
        <div className="p-3 p-lg-5 d-flex flex-wrap test">
            {liste?.map(produit => (
                <Cards key={produit.id} id={produit.id} image={produit.lien_image} titre={produit.libelle} prix={produit.prix}/>  
            ))
            }
        </div>
    </>
  )
}

export default Liste