import React from 'react'


const  Result = ({num,aumento,setResultado,resultado}) => {
    
    let operacion = () => {
        let resultado = parseInt(num) + parseInt(num*aumento/100)
        setResultado(resultado)
    }

    return (
        <>
        <button onClick={operacion}>=</button>
          <h1>${resultado}</h1>  
        </>
    )
}

export default Result;
