import { useState } from 'react';
import { Button, Card, Input, Text } from '../../Components';
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';

interface RegisterFormValues {
    [key: string]: string;
    fullName: string;
    email: string;
    password: string;
}

const RegisterContainer = () => {
    const navigate = useNavigate();
    const [formData] = useState<RegisterFormValues>({
        fullName: '',
        email: '',
        password: '',
    });

    return (
        <Formik
            initialValues={formData}
            validationSchema={Yup.object().shape({
                fullName: Yup.string().required('Full Name is required'),
                email: Yup.string().email('Invalid email address').required('Email Address is required'),
                password: Yup.string().required('Password is required').matches(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, 'Password must be at least 8 characters and alphanumeric'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                if (Object.keys(values).some((key) => values[key] === '')) {
                    setSubmitting(false);
                } else {
                    try {
                        const requestOptions = {
                            method: 'POST',
                            body: JSON.stringify({
                                name: values.fullName,
                                email: values.email,
                                password: values.password,
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        };

                        const response = await fetch('https://mock-api.arikmpt.com/api/user/register', requestOptions);

                        if (response.ok) {
                            const responseData = await response.json();
                            console.log('Registration successful:', responseData);
                            navigate('/login');
                        } else {
                            const errorData = await response.json();
                            console.error('Registration failed:', errorData);
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                }
            }}
        >
            <Form className="max-w-md mx-auto">
            <Card border={false}>
                <Card border className='mb-2'>
                    <h1 className='text-xl'><b>Register</b></h1>
                </Card>
                <Card border>
                    <div className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2">{'Name:'}</Text>
                        <Field as={Input}
                            className="w-full p-2 border border-gray-300 rounded" type="text" 
                            id="fullName" 
                            name="fullName" placeholder="Fullname" 
                        />
                        <ErrorMessage 
                            name="fullName"
                            component="span" className="error text-xs text-red-600" 
                        />
                    </div>

                    <div className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2">{'Email:'}</Text>
                        <Field as={Input}
                            className="w-full p-2 border border-gray-300 rounded" type="email"
                            id="email"
                            name="email" placeholder="Email" 
                        />
                        <ErrorMessage 
                            name="email"
                            component="span" className="error text-xs text-red-600" 
                        />
                    </div>

                    <div className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2">{'Password:'}</Text>
                        <Field as={Input}
                            className="w-full p-2 border border-gray-300 rounded" type="password"
                            id="password"
                            name="password" placeholder="Password" 
                        />
                        <ErrorMessage 
                            name="password"
                            component="span" className="error text-xs text-red-600" 
                        />
                    </div>

                    <div>
                        <Button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        label={'Register'}
                        />
                    </div>
                </Card>
            </Card>
            </Form>
        </Formik>
    )
}

export default RegisterContainer