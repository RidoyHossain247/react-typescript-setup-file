import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { reletedData } from "../../fack-data"
const RightSide = () => {

  return (
    <Box>
      <ChartHistory>Releted</ChartHistory>
      <Wrapper>
        {reletedData.map((item) => {
          const { id, title2, heading2 } = item
          return (
            <Link to={`/releted/${id}`}>
              <CardtWrapper key={id} >
                <Heading>{heading2}</Heading>
                <Title>{title2.substring(0, 28)}...</Title>
              </CardtWrapper></Link>
          )
        }
        )}
      </Wrapper>
    </Box>
  )
}

export default RightSide
const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  overflow: 'auto',
  ':hover': {
    '::-webkit-scrollbar-thumb': {
      display: 'block'
    }
  },
  height: 'calc(100vh - 66px)',
  '::-webkit-scrollbar': {
    width: '6px',
    height: '300px'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    display: 'none'
  }

}))
const ChartHistory = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  padding: '6px 0',
  color: '#fff',
  marginBottom: "8px",
  borderRadius: '8px'
}))
const CardtWrapper = styled(Box)(({ theme }) => ({
  padding: "8px",
  margin: "15px 0",
  backgroundColor: '#e9e9e9',
  borderRadius: '8px',
  position: 'relative',
  transition: 'all .3s linear',
  top: '0',
  ':hover': {
    top: '-5px',
  }
}))
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  color: '#000'
}))
const Title = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  color: '#000'
}))