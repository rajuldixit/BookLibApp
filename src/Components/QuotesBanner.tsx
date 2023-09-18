import Stack from '@mui/material/Stack'
import React from 'react'
import image from '../Assets/images/p03gg1lc.webp';
import { Typography } from '@mui/material';
import { QuotesBannerText } from '../Utils/constants';

const QuotesBanner = () => {
  return (
    <Stack position={'relative'} px={6} py={3} margin={'0 auto'} width={'100%'} boxSizing={'border-box'}>
      <img src={image} style={{width: '80%', height: '60vh', margin: '0 auto'}} />  
      <Typography textAlign={'center'} py={3} px={3} width={'70%'} color={'grey'} variant='body1'>
        {QuotesBannerText}
      </Typography>
    </Stack>
  )
}

export default QuotesBanner