import React, { useState } from "react";

const DisplayName = () => {
  // Combine form data into a single state object
  const [firstname,setfirstname]=useState('')
   const [lastname,setlastname]=useState('')
   const [fullname,setfullname]=useState('')
   function getfullname(e){
    e.preventDefault()
    setfullname(`Full Name: ${firstname} ${lastname}`)

   }

  return (
       <>
        <h1>Full Name Display</h1>

<form onSubmit={(e)=>getfullname(e)}>
    <div class="form-group">
        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname" required value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
    </div>
    <div class="form-group">
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" required value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
    </div>
    <button type="submit">Submit</button>
    {
      fullname && <p>{fullname}</p>
    }
</form>
       </>

  );
};

export default DisplayName;
