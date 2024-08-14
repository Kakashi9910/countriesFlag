import axios from "axios";
import React, { useEffect, useState } from "react";


const WeatherComponent = () => {
   const [city,setCity] = useState('');
   const [loaded,setLoaded] = useState('')
   const [cityWeather,setCityWeather] = useState({})
   const apiKey = '1b50a5d7f93d41eb8eb13432241408'

   const handleSearch=async()=>{
      try {
      setLoaded('Loading data...')
      const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      const response = await axios.get(url)
      setCityWeather(response.data)
      setLoaded('')
      } catch (error) {
         setCityWeather({})
         window.alert('Failed to fetch weather data')
      }
   }
   return (
      <>
         <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Enter city name"
            style={{ height: '30px', marginTop: '10px' }}
         />
         <button style={{ height: '35px', marginTop: '10px' }} onClick={handleSearch}>Search</button>
          <p>{loaded}</p>          
         {Object.keys(cityWeather).length!==0 &&
            <div className="weather-cards" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
               <div className="weather-card" style={{ width: '150px', height: '150px', border: '1px solid black' }}>
                  <h3>Temperature</h3>
                  <p>{cityWeather.current.temp_c}&#8451;</p>
               </div>
               <div className="weather-card" style={{ width: '150px', height: '150px', border: '1px solid black' }}>
                  <h3>Humidity</h3>
                  <p>{cityWeather.current.humidity}%</p>
               </div>
               <div className="weather-card" style={{ width: '150px', height: '150px', border: '1px solid black' }}>
                  <h3>Condition</h3>
                  <p>{cityWeather.current.condition.text}</p>
               </div>
               <div className="weather-card" style={{ width: '150px', height: '150px', border: '1px solid black' }}>
                  <h3>Wind Speed</h3>
                  <p>{cityWeather.current.wind_kph} kph</p>
               </div>
            </div>
         }
      </>
   )
}

export default WeatherComponent