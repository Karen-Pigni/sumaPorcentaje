import React, { useReducer } from 'react';
import { render } from 'react-dom';
import './style.css';



let reducer = (state, action) => {
  switch(action.type){
    case 'CIFRA':
      return{
        ...state,
        num: action.num
      }
    case 'AUMENTO':
      return{
        ...state,
        aum: action.aum
      }
      default: break; 
  }
}

const App = () => {
  const [{num,aum} , dispatch] = useReducer(reducer, {num: 0, aum: 0})
  let numero = parseInt(num);
  let aumento = parseInt(num*aum/100);
  
  const handleNum = (e) => {
    dispatch({
      type: 'CIFRA',
      num: e.target.value
    })
  }
 
  const handleAum = (e) => {
    dispatch({
      type: 'AUMENTO',
      aum: e.target.value
    })
  }

  return(
    <>
      <div>
        <input type="number" onChange={ handleNum } placeholder="numero"/>
      </div>
      <div>
        <input type="number" onChange={ handleAum } placeholder="% de aumento"/>
      </div>
      <h1>=</h1>
      <h1>
        { isNaN && ( numero + aumento ) ?
          ( numero + aumento ) : 0 
        }
      </h1>
    </>
  )
}


render(React.createElement(App), document.getElementById('root'));
