import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import HeroImage from '../../Components/HeroImage'
import Quotes from '../../Components/Cards/Quotes'
import QuotesBanner from '../../Components/QuotesBanner'
import axios from 'axios'

const Home = () => {
  useEffect(() => {
    const url = process.env.SERVER_API || 'http://localhost:8080/'
    axios.get(`${url}books`).then(resp => {
      console.log(resp)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <Stack sx={{background:'gainsboro'}}>
      <Navbar /> 
      <HeroImage />
      <Quotes />
      <QuotesBanner />
    </Stack>
  )
}

export default Home