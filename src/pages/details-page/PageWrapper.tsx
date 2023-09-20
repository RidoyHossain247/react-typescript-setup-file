import { Box, styled } from '@mui/material'
import React from 'react'
type PageProps = {
  children: any,
}
const PageWrapper = ({ children }: PageProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default PageWrapper
const Wrapper = styled(Box)(() => ({
  backgroundColor: '#fff',
  height: 'calc(100vh - 129.5px)',
  overflow: 'hidden',
  boxShadow: '0px 8px 24px 0px rgba(44, 63, 88, 0.10)',
  padding: '15px',
}))