import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CustomInput from '../../components/custom-input';
import FormButton from '../../components/form/FormButton';
import FormWrapper from '../../components/form/FormWrapper';
const ResetPassword = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required()
      .label("Email address"),
    code: Yup.string().required().label("Code"),
    password: Yup.string().min(8).required().label("Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required()
      .label("Confirm Password"),
  });
  return (
    <FormWrapper label="Forgot change password">

      <Formik
        initialValues={{
          email: '',
          code: '',
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
            <CustomInput label={'Email address'} placeholder='Email address' name={'email'} type='email' />
            <CustomInput label={'Code'} placeholder='Code' name={'code'} type='text' />
            <CustomInput label={'Password'} name={'password'} placeholder='Password' type='password' />
            <CustomInput label={'Confirm Password'} name={'confirmPassword'} placeholder='Confirm Password' type='password' />
            <FormButton label={'Submit'} />
          </Form>
        )}
      </Formik>

    </FormWrapper>
  )
}

export default ResetPassword





