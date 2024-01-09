import { useState } from 'react';
import { Button, Card, Input, Text } from '../../Components';
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface LogFormValues {
    [key: string]: string;
    email: string;
    password: string;
}

const LogContainer = () => {
    const navigate = useNavigate();
    const [formData] = useState<LogFormValues>({
        email: '',
        password: '',
    });

    return (
        <Formik
            initialValues={formData}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email address').required('Email Address is required'),
                password: Yup.string().required('Password is required'),
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

                        const response = await fetch('https://mock-api.arikmpt.com/api/user/login', requestOptions);

                        if (response.ok) {
                            const responseData = await response.json();
                            console.log('Login successful:', responseData);
                            window.localStorage.setItem('token', responseData.data.token);
                            navigate('/protect');
                        } else {
                            const errorData = await response.json();
                            console.error('Login failed:', errorData);
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
                    <h1 className='text-xl'><b>Login</b></h1>
                </Card>
                <Card border>

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

export default LogContainer