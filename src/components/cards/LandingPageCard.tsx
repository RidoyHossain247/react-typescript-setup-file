import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

type ItemProps = {
  id: number;
  icon: any,
  title: string;
  heading: string
}

const LandingPageCard = ({ item }: any) => {
  const { id, icon, title, heading }: ItemProps = item

  return (

    <CardWrapper >
      <Link to={`/details/${id}`} style={{ display: 'block' }}>
        {icon}
        <Heading variant='h5'>{heading}</Heading>
        <Title>{title}</Title>
      </Link>
    </CardWrapper>
  )
}

export default LandingPageCard

const CardWrapper = styled(Box)(() => ({
  width: '100%',
  minHeight: '150px',
  backgroundColor: '#fff',
  padding: '16px',
  borderRadius: '10px',
  boxShadow: '0px 0px 9px 0px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  top: "0",
  cursor: 'pointer',
  transition: 'all .3s linear',
  ':hover': {
    boxShadow: '0px 8px 19px 0px rgba(0, 0, 0, 0.15)',
    top: "-8px",
  }
}))
const Heading = styled(Typography)(() => ({
  fontSize: '20px',
  margin: '8px 0'
}))
const Title = styled(Typography)(() => ({
  fontSize: '15px',
}))