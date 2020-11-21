import React from 'react';

const Numeros = ({setNum,setAumento}) => {

    const inputNum = (e) => {
        let num = e.target.value;
        setNum(num)
    }
 
    const inputNum2 = (e) => {
        let num = e.target.value;
        setAumento(num)
    }

    return (
        <>
            <div>
                <input type="number" onChange={inputNum} placeholder="numero"/>
            </div>
            <div>
                <input type="number" onChange={inputNum2} placeholder="porcentaje"/>
            </div>
        </>
    )
}

export default Numeros
