import React, { useState } from "react";
import { context } from "./App";
import Context from './Context'
const Component1 = () => {
    const[count,setCount]=useState(0)
    return(
        <>
        <context.Consumer>{(counter) => {
            return <><p> context example {counter}</p><p>add:{count}</p><button onClick={()=>setCount(count+1)}> Increment</button></>
        }}</context.Consumer>
        <Context/>
        </>
        
    )
}
export default Component1