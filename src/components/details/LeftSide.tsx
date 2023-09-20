import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { cartListData } from "../../fack-data"

const LeftSide = () => {

  return (
    <Box>
      <ChartHistory>Chart History</ChartHistory>
      <Wrapper>
        {cartListData.map((item) => {
          const { id, title } = item
          return (
            <Link to={`/chart-list/${id}`}>
              <ChartListWrapper key={id} >
                <ChartList>{title.substring(0, 28)}...</ChartList>
              </ChartListWrapper>
            </Link>
          )
        }
        )}
      </Wrapper>
    </Box>
  )
}

export default LeftSide
const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  overflow: 'auto',
  height: 'calc(100vh - 66px)',
  ':hover': {
    '::-webkit-scrollbar-thumb': {
      display: 'block'
    }
  },
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
const ChartListWrapper = styled(Box)(({ theme }) => ({
  padding: "8px",
  margin: "15px 0",
  backgroundColor: '#e9e9e9',
  borderRadius: '20px 0 20px 0',
  position: 'relative',
  transition: 'all .3s linear',
  top: '0',
  ':hover': {
    top: '-5px',
  }
}))
const ChartList = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  color: '#000'
}))