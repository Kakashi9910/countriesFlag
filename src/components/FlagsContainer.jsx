import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const URL=`https://xcountries-backend.azurewebsites.net/all`
const FlagsContainer=()=>{

    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

   const [flags,setFlags] = useState([])

    useEffect(()=>{
        const FlagsData= async ()=>{
            try {
            const response=await axios.get(URL)
            console.log(response.data)
            setFlags(response.data)
            } catch (error) {
                console.error('Error fetching data: ',error)
                return null
            }
        }
        FlagsData()
    },[])
    return (
<Grid container spacing={2}>
{flags.map((element,index) => (
  <Grid key={index} item xs={2}>
  <Item>
      <img style={{width:'90%'}} src={element.flag} alt={element.abbr} />
      <p>{element.name}</p>
  </Item>
</Grid>
))}

</Grid>
    )
}

export default FlagsContainer