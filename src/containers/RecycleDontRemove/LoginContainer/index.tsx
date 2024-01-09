// LoginForm.tsx
import React, { useEffect, useState } from 'react';
import { Button, Card, Input, Text } from '../../../Components';

interface RegistrationData {
    email: string;
    password: string;
  }

const LoginForm: React.FC = () => {
    const [loginValues, setLoginValues] = useState<RegistrationData>({ email: '', password: '' });

    useEffect(() => {
        // Retrieve registration data from local storage
        const storedData = localStorage.getItem('registrationData');
        if (storedData) {
          const registrationData = JSON.parse(storedData);
          setLoginValues(registrationData);
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Check if email and password match the registered data
        const storedData = localStorage.getItem('registrationData');
        if (storedData) {
            const registrationData = JSON.parse(storedData);
            if (
            loginValues.email === registrationData.email &&
            loginValues.password === registrationData.password
            ) {
            // Login successful, you can redirect or perform other actions here
            console.log('Login successful');
            } else {
            // Login failed, show error message or handle accordingly
            console.error('Login failed');
            }
        }
    };

    const handleRegisterClick = () => {
        // Navigate to the Registration Form
        window.location.href = '/register';
    };

    return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <Card border={false}>
            <Card border className='mb-2'>
                <h1 className='text-xl'><b>LOGIN</b></h1>
            </Card>
            <Card border>
                <div className="mb-4">
                    <Text className="block text-gray-700 text-sm font-bold mb-2">{'Email:'}</Text>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={loginValues.email}
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-4">
                    <Text className="block text-gray-700 text-sm font-bold mb-2">
                    {'Password:'}
                    </Text>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={loginValues.password}
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                    />
                </div>
                <div className='button-dress'>
                    <div>
                        <Button
                            type={"submit"}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800" label={'Login'}
                        />
                    </div>
                    <Text>{'OR'}</Text>
                    <div>
                        <Button
                            type={"button"}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800" 
                            label={'Register'}
                            onClick={handleRegisterClick}
                        />
                    </div>
                </div>
            </Card>
        </Card>
    </form>
  );
};

export default LoginForm;


