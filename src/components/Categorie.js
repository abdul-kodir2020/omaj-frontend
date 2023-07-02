import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TagContext } from '../Context'

function Categorie() {
    const [categories, setCategories] = useState()
    const [titre, setTitre] = useState("Tous les articles")
    const {tag,setTag} = useContext(TagContext)

    useEffect(()=>{
        const getCategories = async() =>{
            await axios.get('http://localhost:5000/api/categories', {
                headers:{
                    token: 'ytgjgjsdc54365f4vdf5'
                }
            })
            .then((response)=> setCategories(response.data))
            .catch((err)=> console.log(err) )
        }
        getCategories()
    },[tag])

    const handleClick = (e) =>{
        setTag(e.target.name)
        const buttons = document.querySelectorAll(".categorie button")
        buttons.forEach(button => {
            button.classList.remove("active")
        });
        e.target.classList.add("active")
        setTitre(e.target.name)
        console.log(titre)
    }

  return (
    <div className='categorie'>
        <p>{titre}</p>
        <div>
            <button name='tous les articles' onClick={(e)=>handleClick(e)} className='myButton active'>Tous</button>
            {
                categories?.map((categorie)=>(
                    <button className='myButton' key={categorie.id} name={categorie.nom} onClick={(e)=>handleClick(e)}>{categorie.nom}</button>
                ))
            }
        </div>
    </div>
  )
}

export default Categorie