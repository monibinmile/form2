import React from 'react';
import './App.css';
import {addInc, subDec} from './store1/actions/index.js'
import { useSelector, useDispatch } from 'react-redux';
const App=()=> {
  const myState = useSelector((state)=> state.changeValue)
  const dispatch =useDispatch()
  return (
    <>
    <div>
      <h1>Redux Example</h1>
      <p>it manage state</p>
     
    </div>
    <div><span>
    <button onClick={()=>dispatch(addInc())}>+</button>
    </span>
    <span>
    <button onClick={()=>dispatch(subDec())}>-</button>{myState}</span>
    </div>
    </>
     
)
}

export default App;
