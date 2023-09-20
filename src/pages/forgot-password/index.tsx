import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CustomInput from '../../components/custom-input';
import FormButton from '../../components/form/FormButton';
import FormWrapper from '../../components/form/FormWrapper';
const ForgotPassword = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required()
      .label("Email address"),
  });
  return (
    <FormWrapper label="Verify email address">
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <CustomInput label={'Email address'} placeholder='Email address' name={'email'} type='email' />
            <FormButton label={'Submit'} />
          </Form>
        )}
      </Formik>

    </FormWrapper>
  )
}

export default ForgotPassword






