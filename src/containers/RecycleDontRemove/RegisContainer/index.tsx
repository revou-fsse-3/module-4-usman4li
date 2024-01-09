// RegisterForm.tsx
import React from 'react';
import { Button, Card, Input, Text } from '../../../Components';
import useUserFormik, { RegistrationFormData } from './types';

interface RegistrationFormProps {
    onRegister: (data: RegistrationFormData) => void;
}

const RegisterForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {

    const formik = useUserFormik((values) => {
        onRegister(values);
    });

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2">{'Username:'}</Text>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {formik.touched.username && formik.errors.username && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.username}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2">{'Password:'}</Text>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                        )}
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
        </form>
    );
};

export default RegisterForm;

