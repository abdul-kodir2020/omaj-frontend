import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'

function Cart() {
    const {cartItems, total} = useContext(CartContext)
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header border-bottom">
    <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">Ton Panier</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-0">
    {
        cartItems.length === 0? 
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <p>Aucun produit...</p>
            </div>
        :
        <div className='d-flex flex-column justify-content-between h-100'>
            <div className='d-flex flex-column gap-4 p-3 liste-cart'>
                {
                    cartItems?.map((item)=>(
                        <CartItem produit={item} />
                    ))
                }
            </div>
            <div className='section-review border-top bg-white p-4 d-flex flex-column justify-content-between'>
                <div className='d-flex justify-content-between'>
                    <h5 className='fw-bold m-0' style={{fontSize: '18px'}}>Total</h5>
                    <h5 className='fw-bold m-0' style={{fontSize: '18px'}}>{total} €</h5>
                </div>
                <button className='myButton-white'>Commander</button>
            </div>
        </div>
        
    }
  </div>
</div>
  )
}

export default Cart