import axios from "axios";
import React, { useEffect, useState } from "react";


const CoutriesUrl = ' https://crio-location-selector.onrender.com/countries'
const LocationSelect=()=>{
  const [countries,setCountries] = useState([])
  const [states,setStates] = useState([])
  const [cities,setCities] = useState([])


  const [country,setCountry] = useState('')
  const [state,setState] = useState('')
  const [city,setCity] = useState('')
  useEffect(()=>{
    const getAllCountries=async()=>{
      try {
        const response = await axios.get(CoutriesUrl);
        setCountries(response.data)
      } catch(error) {
        console.error('Error',error)
      }
    }
    getAllCountries()
  },[])

  const handleCountry=(event)=>{
    console.log(event.target.value)
    setCountry(event.target.value)
    const getStates=async()=>{
      try {
        const countryName = event.target.value
        const stateUrl = `https://crio-location-selector.onrender.com/country=${countryName}/states`
        const response = await axios.get(stateUrl)
        setStates(response.data)
      } catch (error) {
        console.error('Error',error)
      }

    }
    getStates()
  }

 const handleState=(event)=>{
      setState(event.target.value)
      const getCity=async()=>{
        const stateName = event.target.value
        const cityUrl = `https://crio-location-selector.onrender.com/country=${country}/state=${stateName}/cities`
        const response = await axios.get(cityUrl)
        setCities(response.data)
      }
      getCity()
 }
 
 const handleCity=(event)=>{
  setCity(event.target.value)
 }

  return (
    <>
    <h1>Select Location</h1>
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{border:'1px solid grey',height:'30px',margin:'5px'}}>
      <select style={{width:'150px',height:'30px'}} name="countries" id="countrySelector" onChange={handleCountry}>
      <option value="" selected disabled>Select Country</option>
        {countries.map((countryName,index)=>(
          <option key={index} value={countryName}>{countryName}</option>
        ))}
      </select>
      </div>
      <div style={{border:'1px solid grey',height:'30px',margin:'5px'}}>
      <select style={{width:'150px',height:'30px'}} disabled={!country} name="state" id="stateSelector" onChange={handleState}>
      <option value="" selected disabled>Select State</option>
      {states.map((stateName,index)=>(
         <option key={index} value={stateName}>{stateName}</option>
      ))}

      </select>
      </div>
      <div style={{border:'1px solid grey',height:'30px',margin:'5px'}}>
      <select style={{width:'150px',height:'30px'}} disabled={!country || !state} name="city" id="citySelector" onChange={handleCity}>
      <option value="" selected disabled>Select City</option>
      {cities.map((cityName,index)=>(
       <option key={index} value={cityName}>{cityName}</option>
      ))}
      </select>
      </div>
    </div>
    {country && state && city &&
    <h2>You selected {city}, {state}, {country}</h2>
    }
    </>
  )
}

export default LocationSelect;
