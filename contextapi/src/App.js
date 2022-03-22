
import React, { createContext, useState} from "react"
import Component1 from "./Component1";
const context = createContext()
// eslint-disable-next-line react-hooks/rules-of-hooks
const App = () => {
  return(
  <>
   <context.Provider value={'done'}> <Component1 /></context.Provider>
   </>
  ) 
}

export default App
export {context}
