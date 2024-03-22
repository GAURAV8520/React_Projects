import React, { useState } from "react";
import { createContext } from "react";

export const Cartcontext = createContext();


const CartProvider=(props)=>{

    const [item ,SetItem]=useState([]);
    
    const values={
        item,
        SetItem
    }

    return(
        <Cartcontext.Provider value={values}>
            {props.children}
        </Cartcontext.Provider>
    );
}

export default CartProvider;