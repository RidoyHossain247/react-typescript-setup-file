import { Typography, styled } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import CustomInput from '../../components/custom-input';
import FormButton from '../../components/form/FormButton';
import FormWrapper from '../../components/form/FormWrapper';
const SignUp = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required().label("First Name"),
    LastName: Yup.string().required().label("Last Name"),
    email: Yup.string()
      .email("Invalid email")
      .required()
      .label("Email address"),
    password: Yup.string().min(8).required().label("Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required()
      .label("Confirm Password"),
  });
  return (
    <FormWrapper label="Register">
      <Formik
        initialValues={{
          firstName: '',
          LastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <CustomInput label={'First Name'} placeholder='First Name' name={'firstName'} type='text' />
            <CustomInput label={'Last Name'} placeholder='Last Name' name={'LastName'} type='text' />
            <CustomInput label={'Email address'} placeholder='Email address' name={'email'} type='email' />
            <CustomInput label={'Password'} name={'password'} placeholder='Password' type='password' />
            <CustomInput label={'Confirm Password'} name={'confirmPassword'} placeholder='Confirm Password' type='password' />
            <FormButton label={'Register'} />
          </Form>
        )}
      </Formik>
      <AlreadyAcc variant='body1'>Already have an account? <SignupColor to="/login" >Login</SignupColor></AlreadyAcc>
    </FormWrapper>
  )
}

export default SignUp

const AlreadyAcc = styled(Typography)(({ theme }) => ({
  textAlign: 'center'
}))
const SignupColor = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: '500'
}))




