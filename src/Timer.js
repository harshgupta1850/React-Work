import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timer,setTimer] = useState(0);

    useEffect( () => {
        const time= setInterval(increseTime,1000)
        return () =>{
            clearInterval(time)
        }
    })
     const increseTime = () =>{
       setTimer(timer+1)
    }
    return(
        <div>
            {timer}
        </div>
    )
} 
 export default Timer;