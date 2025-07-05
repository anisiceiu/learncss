import React, { useState } from 'react';

const RealTimeInput = () => {

    const [inputText,setInputtext]=useState('');

    const onInputChange=({value})=>{
           setInputtext(value);
    }


    return (
        <div>
            <input onChange={(e)=>onInputChange(e.target)}/>
            <h4>You Typed:{inputText}</h4>
        </div>
    );
};

export default RealTimeInput;