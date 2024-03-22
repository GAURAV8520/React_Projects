import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../Context/Cartcontext';

function Item(props) {
    
    const {item,SetItem}=useContext(Cartcontext);
 



  return (
    <div>
        <h2>Name: {props.name}</h2>
        <h2>Price :{props.price}</h2>
        <button 
        onClick={()=>SetItem([
            ...item,
            {name :props.name ,
            price :props.price},
        ])
        }
        >Add to Cart</button>
      
    </div>
  )
}

export default Item
