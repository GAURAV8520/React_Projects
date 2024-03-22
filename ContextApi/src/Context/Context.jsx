import { createContext } from "react";
import { useState } from "react";

export const Context=createContext(null);



const ContextProvider=(props)=>{

    const [count,Setcount]=useState(0);

    const contextValue={
        count,
        Setcount
        
        
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider