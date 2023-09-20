import { Button, styled } from '@mui/material';
import { useFormikContext } from "formik";
import React from 'react';

type ButtonProps = {
  label: string
}

const FormButton = ({ label }: ButtonProps) => {
  const { isSubmitting, isValid } = useFormikContext<any>();
  return (
    <LoginBtn variant='contained' type='submit' fullWidth disabled={isSubmitting || !isValid}>{label}</LoginBtn>
  )
}

export default FormButton
const LoginBtn = styled(Button)(({ theme }) => ({
  marginBottom: '30px',
  marginTop: '15px',
  textTransform: 'capitalize'
}))