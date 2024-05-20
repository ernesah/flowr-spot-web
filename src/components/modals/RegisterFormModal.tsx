import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../CustomTextInput';
import Button from '../Button';
import ErrorDisplay from '../ErrorDisplay';
import { createAccount } from '../../api/user.api';

const RegisterForm: React.FC<{ onSuccessRegistration: () => void }> = ({
  onSuccessRegistration
}) => {
  const [userRegistered, setUserRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const RegisterFormSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required*'),
    last_name: Yup.string().required('Last name is required*'),
    date_of_birth: Yup.date().required('Enter your date of birth*'),
    email: Yup.string()
      .email('Please enter a valid email address!')
      .required('Email is required*'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters.')
      .required('Password is required*')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
        'Password must contain 6 characters, one uppercase, one lowercase, one number and one special case character.'
      )
  });

  return (
    <>
      {userRegistered ? (
        <div>
          <h3 className='font-ubuntu font-medium text-bluish-cyan text-xl text-center'>
            Congratulations! You have successfully registered on FlowrSpot!
          </h3>
          <div className='flex justify-end mt-4'>
            <Button
              title='OK'
              classes='w-fit rounded mt-2 py-4'
              handleClick={onSuccessRegistration}
            />
          </div>
        </div>
      ) : (
        <>
          <h3 className='font-ubuntu font-medium text-bluish-cyan text-xl text-center'>
            Create an Account
          </h3>
          <div className='w-full mt-6 mb-4'>
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                date_of_birth: '',
                email: '',
                password: ''
              }}
              validationSchema={RegisterFormSchema}
              onSubmit={async (values, { setErrors, setSubmitting }) => {
                try {
                  const response = await createAccount(values);
                  if (response.data.auth_token) {
                    setUserRegistered(true);
                  }
                  setSubmitting(false);
                } catch (err: any) {
                  setErrorMessage(
                    err.response.data.error ||
                      'An error occurred during registration. Please try again!'
                  );
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className='grid md:grid-cols-2 gap-x-2'>
                    <InputField
                      id='first_name'
                      name='first_name'
                      label='First Name'
                    />
                    <InputField
                      id='last_name'
                      name='last_name'
                      label='Last Name'
                    />
                  </div>
                  <InputField
                    id='date_of_birth'
                    type='date'
                    name='date_of_birth'
                    label='Date of Birth'
                  />
                  <InputField id='email' name='email' label='Email Address' />
                  <InputField
                    id='password'
                    type='password'
                    name='password'
                    label='Password'
                  />
                  <Button
                    type='submit'
                    title={isSubmitting ? 'Creating Account' : 'Create Account'}
                    classes='w-full rounded mt-2 py-4'
                    isSubmitting={isSubmitting}
                  />
                  {errorMessage && (
                    <ErrorDisplay
                      errorMessage={errorMessage}
                      classes='text-xs p-2'
                    />
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </>
  );
};

export default RegisterForm;
