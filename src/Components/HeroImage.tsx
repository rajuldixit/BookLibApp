import React from 'react'
// const banner = 
import Banner from '../Assets/images/wp2036897.jpg';
import { Stack, Typography } from '@mui/material';
import { HeroText } from '../Utils/constants';

const HeroImage = () => {
  return (
    <Stack position={'relative'}>
      <img src={Banner} style={{width: '100%', height: '80vh'}} /> 
      <Typography position={'absolute'} variant='h5' color={'#fff'} right={'3%'} top={'5%'} width={'30%'} textAlign={'center'}>
        {HeroText}  
      </Typography> 
    </Stack>
  )
}

export default HeroImage