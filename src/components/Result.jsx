import React from 'react'


const  Result = ({num,aumento}) => {
    
        let resultado = parseInt(num) + parseInt(num*aumento/100)

    return <h1>${resultado}</h1>  
}

export default Result;
