import React, { useState, useEffect } from 'react';

function HookInterval(){
    const [count,setCount] = useState(0);
    useEffect( () =>{
        const interval = setInterval(tick,1000)
        return () =>{
            clearInterval(interval)
        }
    })
    const tick = () => {
        setCount(count+1)
    }
    return(
        <div>
            {count}
        </div>
    )
}

export default HookInterval;