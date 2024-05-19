import { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../CustomTextInput';
import Button from '../Button';
import ErrorDisplay from '../ErrorDisplay';
import { login as loginApi } from '../../api/auth.api';
import { AuthContext } from '../../store/auth-context';

const LoginForm: React.FC<{
  onSuccessLogin: () => void;
  openProfile: () => void;
}> = ({ onSuccessLogin, openProfile }) => {
  const { setSession } = useContext(AuthContext);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
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
      {userLoggedIn ? (
        <div className='mt-3'>
          <h3 className='font-ubuntu font-medium text-bluish-cyan text-xl text-center'>
            Congratulations! You have successfully logged into FlowrSpot!
          </h3>
          <div className='flex justify-end gap-x-4 mt-7'>
            <Button
              title='OK'
              classes='w-fit rounded py-4 px-5'
              handleClick={onSuccessLogin}
            />
            <Button
              title='PROFILE'
              type='link'
              classes='w-fit border border-ruddy-pink rounded py-4 px-5'
              handleClick={openProfile}
            />
          </div>
        </div>
      ) : (
        <>
          <h3 className='font-ubuntu font-medium text-bluish-cyan text-xl text-center'>
            Welcome Back
          </h3>
          <div className='w-full mt-6 mb-4'>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={LoginFormSchema}
              onSubmit={async (values, { setErrors, setSubmitting }) => {
                try {
                  const response = await loginApi(values);
                  if (response.data.auth_token) {
                    setUserLoggedIn(true);
                    setSession(response.data.auth_token);
                  }
                  setSubmitting(false);
                } catch (err: any) {
                  setErrorMessage(
                    err.response.data.error || 'An error occurred'
                  );
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField id='email' name='email' label='Email Address' />
                  <InputField
                    id='password'
                    type='password'
                    name='password'
                    label='Password'
                  />
                  <Button
                    title={
                      isSubmitting ? 'Logging in' : 'Login to your Account'
                    }
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

export default LoginForm;
