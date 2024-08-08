import React, { useEffect, useRef, useState } from "react"


const DisplayName=()=>{
    const [submitted,setSubmit] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const handleSubmit=(event)=>{
        event.preventDefault()
        setSubmit(true)
   }
    
    const handleChange=(event)=>{
        if(event.target.id === 'firstName') {
            setFirstName(event.target.value)
        }
        else {
            setLastName(event.target.value)
        }
    }
    return (
   <form onSubmit={(event)=>handleSubmit(event)}>
    <h1>Full Name Display</h1>
    <div>
    <label htmlFor="firstName">First Name: </label>
    <input required type="text" id="firstName" value={firstName} onChange={handleChange}/>
    </div>
    <div>
    <label htmlFor="lastName">Last Name: </label>
    <input required type="text" id="lastName" value={lastName} onChange={handleChange} />
    </div>
    {submitted && <p>Full Name: {firstName} {lastName}</p>}
     <button type="submit">Submit</button>
   </form>
    )
}

export default DisplayName