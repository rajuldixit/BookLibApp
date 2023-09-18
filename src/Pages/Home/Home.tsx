import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroImage from '../../Components/HeroImage'
import Quotes from '../../Components/Cards/Quotes'
import QuotesBanner from '../../Components/QuotesBanner'

const Home = () => {
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