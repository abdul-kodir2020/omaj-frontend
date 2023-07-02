import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

function NavBar() {
    const {nbItems} = useContext(CartContext)
    const [translate, setTranslate] = useState(-100)

    const handleClick = () =>{
        if (translate === -100) {
            setTranslate(0)
        }else{
            setTranslate(-100)
        }
    }

  return (
    <>
    <nav className='nav px-3 px-lg-5'>
        <ul className='item-liste'>
            <li><Link to='/'>Accueil</Link></li>
            <li><Link to='shop'>Shop</Link></li>
        </ul>
        <Link to='/' className='logo'>Selling</Link>
        <div className='cart-button'>
            <a className='' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-cart"></i> Cart <span className='compteur'>{nbItems}</span></a>
            <button className='menu-button' onClick={()=>handleClick()}><i class="bi bi-list"></i></button>
        </div>
        
    </nav>
    <div className='menu-phone shadow' style={{transform: `translateY(${translate}px)`}}>
        <ul className=''>
            <li><Link to='/'>Accueil</Link></li>
            <li><Link to='shop'>Shop</Link></li>
        </ul>
    </div>
    </>
  )
}

export default NavBar