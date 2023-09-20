import { Box, styled, Typography } from '@mui/material';
import React from 'react';

type FormProps = {
  children: any,
  label: string
}
const FormWrapper = ({ children, label }: FormProps) => {
  return (
    <LoginWrapper>
      <MiddleWrapper>
        <Heading variant='h5'>{label}</Heading>
        {children}
      </MiddleWrapper>
    </LoginWrapper>
  )
}

export default FormWrapper
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  marginBottom: '20px'
}))
const LoginWrapper = styled(Box)(() => ({
  backgroundColor: '#fff',
  height: 'calc(100vh - 65px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
const MiddleWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0px 8px 19px 0px rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
  maxWidth: '400px',
  minWidth: '600px',
  padding: '30px',
  [theme.breakpoints.only('xs')]: {
    minWidth: '100%',
    maxWidth: '100%',
  }
}))