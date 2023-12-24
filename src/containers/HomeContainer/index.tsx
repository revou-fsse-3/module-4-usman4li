
import { Input, Text, Button } from '../../components';
import { Formik, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Step1 = () => (
  <>
    <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'First Name'}</Text>
      <Input
        type='text'
        id='firstName'
        name='firstName'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage
        name="firstName" 
        component="div" 
        className="text-red-500 text-sm" 
      />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Last Name'}</Text>
      <Input
        type='text'
        id='lastName'
        name='lastName'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="lastName" 
        component="div" 
        className="text-red-500 text-sm" 
      />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Email Address'}</Text>
      <Input
        type='email'
        id='email'
        name='email'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="email" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Date of Birth'}</Text>
      <Input
        type='date'
        id='dob'
        name='dob'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="dob" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
  </>
);

const Step2 = () => (
  <>
    <h2 className="text-xl font-semibold mb-4">Step 2: Address Information</h2>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Street Address'}</Text>
      <Input
        type='text'
        id='streetAddress'
        name='streetAddress'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="streetAddress" 
        component="div" 
        className="text-red-500 text-sm" 
      />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'City'}</Text>
      <Input
        type='text'
        id='city'
        name='city'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="city" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'State'}</Text>
      <Input
        type='text'
        id='state'
        name='state'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="state" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Zip Code'}</Text>
      <Input
        type='text'
        id='zipCode'
        name='zipCode'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="zipCode" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
  </>
);

const Step3 = () => (
  <>
    <h2 className="text-xl font-semibold mb-4">Step 3: Account Information</h2>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Username'}</Text>
      <Input
        type='text'
        id='username'
        name='username'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="username" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
    <div className="mb-4">
      <Text className='block text-sm font-medium text-gray-700'>{'Password'}</Text>
      <Input
        type='password'
        id='password'
        name='password'
        className='mt-1 p-2 w-full border rounded-md'
      />
      <ErrorMessage 
        name="password" 
        component="div" 
        className="text-red-500 text-sm" />
    </div>
  </>
);
const HomeContainer = () => {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
            password: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            dob: Yup.date().required('Date of Birth is required'),
            streetAddress: Yup.string().required('Street Address is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid Zip Code').required('Zip Code is required'),
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required').matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
            ),
          })}
          onSubmit={(values, { setSubmitting}) => {
            console.log(values);
            setSubmitting(false);
          }}  
        >
          <Form>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}

            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <Button type="button" className="px-4 py-2 bg-gray-300 rounded-md" onClick={prevStep} label={'Previous'}/>
              )}

              {step < 3 && (
                <Button type="button" className="px-4 py-2 bg-gray-300 rounded-md" onClick={nextStep} label={'Next'}/>
              )}

              {step === 3 && (
                <Button type="submit" className="px-4 py-2 bg-gray-300 rounded-md" label={'Submit'}/>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default HomeContainer