import { Typography, styled } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import CustomInput from '../../components/custom-input';
import FormButton from '../../components/form/FormButton';
import FormWrapper from '../../components/form/FormWrapper';
const Login = () => {

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required()
      .label("Email address"),
    password: Yup.string()
      .min(8).required()
      .label("Password"),
  });

  return (
    <FormWrapper label="Login">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <CustomInput label={'Email address'} placeholder='Email address' name={'email'} type='email' />
            <CustomInput label={'Password'} name={'password'} placeholder='Password' type='password' />
            <FormButton label={'Log in'} />
          </Form>
        )}
      </Formik>
      <LostPass to="/forgot-password">Lost your password?</LostPass>
      <DontAcc variant='body1'>Don't have an account? <SignupColor to="/signup" >Signup</SignupColor></DontAcc>
    </FormWrapper>
  )
}

export default Login

const LostPass = styled(Link)(({ theme }) => ({
  marginBottom: '15px',
  color: theme.palette.primary.main,
  display: 'inline-block'
}))
const DontAcc = styled(Typography)(({ theme }) => ({
  textAlign: 'center'
}))
const SignupColor = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: '500'
}))




