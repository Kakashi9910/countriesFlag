import React, { useEffect, useRef, useState } from "react"


const StopWatch=()=>{
    const timeRef= useRef(null)
    const [time,setTime] = useState(0)
    const [isTriggered,setTrigger] = useState(false)
    useEffect(()=>{
        if(isTriggered) {
          timeRef.current=setInterval(()=>{
              setTime(prev=>prev+1)
          },1000)
        } else {
            clearInterval(timeRef.current)
        }
    },[isTriggered])

   const FormatTime=(seconds)=> {
       let min=''+Math.floor(seconds/60)
       let sec=''+ seconds%60
       if(sec<10){
        sec='0'+sec
       }
       return `${min}:${sec}`
      
   }

   const handleTrigger=()=>{
       setTrigger(prev=>!prev)
   }

   const resetTrigger=()=>{
    setTrigger(false)
    setTime(0)
   }
    return (
        <>
        <h1>Stopwatch</h1>
        <p>Time: {FormatTime(time)}</p>
        <button onClick={handleTrigger}>
            {isTriggered?'Stop':'Start'}
        </button>
        <button onClick={resetTrigger}>Reset</button>
        </>
    )
}

export default StopWatch