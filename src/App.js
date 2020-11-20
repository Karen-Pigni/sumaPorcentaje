import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Numeros from './components/Numeros';
import Result from './components/Result';


const App = () => {
  const [ num ,  setNum ] = useState(0);
  const [ aumento  , setAumento ] = useState(0);



  return(
    <>
      <Numeros 
        setNum={setNum} 
        setAumento={setAumento}
      />
      <Result 
        num={num} 
        aumento={aumento} 
        />
    </>
  )
}


render(React.createElement(App), document.getElementById('root'));
