import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tabledata, settabledata]=useState([])
  const [pageno, setpageno]=useState(1)
  const [showdata,setshowdata]=useState([])
 
  function pagenateddata(data,limit){
    if(limit<0 || data.length==0){
      return
    }
   let skip=limit*10
   let filtereddata=data.slice(skip,skip+10)
   setshowdata(filtereddata)
  }
 async function gettabledata(){
    try {
      let response=await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
      settabledata(response.data)
      pagenateddata(response.data, 0)
    } catch (error) {
      console.error(error)
      window.alert(`error is: ${error}`)
      settabledata([])
      pagenateddata([],0)
    }
  }

 
 
  useEffect(()=>{
    gettabledata()
  },[])

  useEffect(()=>{
    pagenateddata(tabledata, pageno-1)
  },[pageno])
  console.log(showdata)
  return (
    <div className="App">
       <h2>Employee Data Table</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
        {
         showdata.length && showdata?.map((obj)=>(
          <tbody>
            <tr>
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.role}</td>
            </tr>
            </tbody>
          ))
        }
    </table>
    <div style={{display:'flex',justifyContent:'center', marginTop:20}}>
     <button onClick={()=>{
      if(pageno>1){
       setpageno((prev)=>prev-1)
      }
     }}>Previous</button>
     <button>{pageno}</button>
     <button onClick={()=>{
      if(pageno<5){
       setpageno((prev)=>prev+1)
      }
     }}>Next</button>
    </div>
    </div>
  );
}

export default App;