import { Box, Typography, styled } from '@mui/material';
import React from 'react';

type CardProps = {
  heading2: string;
  title2: string;
}

const HistoryCard = ({ heading2, title2 }: CardProps) => {
  return (
    <AnswerWrapper >
      <Box py={2}>
        <Heading >{heading2}</Heading>
        <Title >{title2}</Title>
      </Box>
    </AnswerWrapper>
  )
}

export default HistoryCard
const AnswerWrapper = styled(Box)(({ theme }) => ({
  height: 'calc(100% - 100px)',
  overflow: "auto",
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
    backgroundColor: '#e9e9e9',
    borderRadius: '10px',
    display: 'none'
  }
}))

const Heading = styled(Typography)(() => ({
  backgroundColor: '#e9e9e9',
  padding: '8px',
  fontSize: '20px',
  borderRadius: '8px'
}))
const Title = styled(Typography)(() => ({
  fontSize: '16px',
  margin: '12px 8px',
  lineHeight: '1.5'
}))
