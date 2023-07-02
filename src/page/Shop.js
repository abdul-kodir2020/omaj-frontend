import React, { useState } from 'react'
import { TagContext } from '../Context'
import Categorie from '../components/Categorie'
import Liste from '../components/Liste'


function Shop() {
    const [tag, setTag] = useState("tous les articles")
  const value = {tag, setTag}
  return (
    <div>
        <TagContext.Provider value={value}>
        <Categorie/>
        <Liste/>
      </TagContext.Provider>
    </div>
  )
}

export default Shop