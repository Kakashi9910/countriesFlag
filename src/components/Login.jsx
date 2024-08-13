import React, { useState } from "react";

const Login=()=>{

  const [submitSuccess,setSubmitAttempt] = useState(false)
  const [failureText,setFailureText] = useState("")
  const [userDetails,setDetails] = useState({user:"",password:""})
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(userDetails.user==='user' && userDetails.password==='password') {
      setSubmitAttempt(true)
      setFailureText("")
      setDetails({
        user:"",
        password:""
      })
      return
    }
    setFailureText("Invalid username or password")
  }
  return (
    <>
    <h1>Login Page</h1>
    {!submitSuccess?
         <>
         <div>{failureText}</div>
         <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Username:</label>
        <input required placeholder="username" type="text" id="name" value={userDetails.name} onChange={(event)=>{setDetails(prev=>({
          ...prev,
          user:event.target.value
        }))}}/>
        </div>
        <div>
        <label htmlFor="password" >Passsword:</label>
        <input required placeholder="password" type="password" id="password" value={userDetails.password} onChange={(event)=>{setDetails(prev=>({
          ...prev,
          password:event.target.value
        }))}}/>
        </div>
        <button type="submit">Submit</button>
      </form>
         </>
      :
      <div>
         <p>Welcome, user!</p>
      </div>
  }

    </>
  )
}

export default Login;
