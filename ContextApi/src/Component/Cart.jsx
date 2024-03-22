import React, { useState } from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../Context/Cartcontext'

function Cart() {

    const cart =useContext(Cartcontext);
 
    
    const total = cart.item.reduce((a,b)=>a+b.price,0)
    

    return (
    <div>
        <h1>Cart</h1>
        
        
            {cart && 
            cart.item.map((item)=>{
                return (<li>
                    {item.name} - {item.price}
                </li>);
            })}

        
        <h1>Total:{total}</h1>
      
    </div>
  )
}

export default Cart
