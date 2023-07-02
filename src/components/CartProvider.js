import React, { useState } from 'react'
import { CartContext } from '../CartContext'

function CartProvider({children}) {
    const [nbItems, setNbItems] = useState(0)
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) =>{
        let isSame = false
        setNbItems(previous => previous + item.nb)
        setTotal(previous => previous + (item.nb * item.prix))
        cartItems.forEach(ite => {
            if (ite.id === item.id) {
                ite.nb += item.nb
                isSame = true
                console.log('eeee')
            }
        });
        if(!isSame) setCartItems([...cartItems, item])
    }

    const removeFromCart = (item) =>{
        const newItems = cartItems.filter((ite)=>ite.id !== item.id)
        setCartItems(newItems)
        setNbItems(previous => previous - item.nb)
        setTotal(previous => previous - (item.nb * item.prix))

    }

    const setItemNb = (item, nb, plusOuMoins) => {
        if (plusOuMoins) {
            item.nb += 1
            setNbItems(previous => previous + 1)
            setTotal(previous => previous + (1 * item.prix))
        }else{
            item.nb -= 1
            setNbItems(previous => previous - 1)
            setTotal(previous => previous - (1 * item.prix))
            if (item.nb === 0) {
                removeFromCart(item)
            }
        }
        
    }

  return (
    <CartContext.Provider value={{cartItems, nbItems, total, addToCart, removeFromCart, setItemNb}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider