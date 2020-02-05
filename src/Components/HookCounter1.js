import React, { useState, useEffect } from 'react';

function HookCounter1(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect( () =>{
        console.log('tile update')
        document.title= `click ${count} times`
    },[count])
    return(
        <div>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <button onClick={ () => setCount(count+1)}>CLick {count}</button>
        </div>
    )
}

export default HookCounter1;