import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const URL = `https://restcountries.com/v3.1/all`
const FlagsContainer = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const [flags, setFlags] = useState([])
    const [filterFlag,SetFilterFlag] = useState([])
    useEffect(() => {
        const FlagsData = async () => {
            try {
                const response = await axios.get(URL)
                // console.log(response.data)
                setFlags(response.data)
                SetFilterFlag(response.data)
            } catch (error) {
                console.error('Error fetching data: ', error)
                return null
            }
        }
        FlagsData()
    }, [])

    const handleChange = (event) => {
        console.log(typeof event.target.value)
        let newFlags = flags.filter(country=>{
            // console.log(country)
           let name= country.name.common.toLowerCase()
           let searchName=event.target.value.toLowerCase()
            if(name.includes(searchName)) {
                console.log(country)
                return true
            }
            return false
        }) 
        SetFilterFlag(newFlags)
    }
    return (
        <>
            <div style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                <input placeholder="Search for countries" style={{ width: '70%' }} type="text" onChange={handleChange} />

            </div>
            <Grid container spacing={2}>
                {filterFlag.map((element, index) => (
                    <Grid key={index} item xs={2}>
                        <Item className="countryCard">
                            <img style={{ width: '90%' }} src={element.flags.png} alt={element.abbr} />
                            <p>{element.name.common}</p>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </>

    )
}
export default FlagsContainer