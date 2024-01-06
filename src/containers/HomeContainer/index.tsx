
import { Button, Input, Text, Card } from '../../Components';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const HomeContainer = () => {
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if(step === 3) {
            return
        }
        setStep((prevState) => prevState + 1)
    }

    const handlePrevious = () => {
        if(step ===1) {
            return
        }
        setStep((prevState) => prevState - 1)
    }

    const formMik = useFormik ({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            dof:'',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
            password: '',
        },
        onSubmit: (values) => console.log(values),
        validationSchema: yup.object({
            firstName: yup
            .string()
            .required('First Name is required'),
            lastName: yup
            .string()
            .required('Last Name is required'),
            email: yup.string().email().required('Email is required'),
            dof: yup
            .date()
            .nullable()
            .required('Date of Birth is required')
            .max(new Date(), 'Date of Birth must be in the past')
            .test('is-adult', 'You must be at least 18 years old', function (value) {
                const currentDate = new Date();
                const userDateofBirth = new Date(value);
                const age = currentDate.getFullYear() - userDateofBirth.getFullYear();

                return age >= 18;
            }), 
            streetAddress: yup.string().required('Street Address is required'),
            city: yup.string().required('City is required'),
            state: yup.string().required('State is required'),
            zipCode: yup.string().matches(/^\d{5}$/, 'Invalid Zip Code').required('Zip Code is required'),
            username: yup.string().required('Username is required'),
            password: yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    'Password must contain at least one lowercase letter, one uppercase letter, and one digit'
                )
                .required('Password is required'),
        })
    });
    return (
        <Card border={false} className={''}>
            <Card border>
                <form onSubmit={formMik.handleSubmit}>
                    {step === 1 && (
                        <div>
                            <div>
                                <Text >{'First Name'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='First Name'
                                    name={'firstName'}
                                    value={formMik.values.firstName}
                                    onChange={formMik.handleChange('firstName')}
                                />
                                {
                                    formMik.errors.firstName && (
                                        <Text className='text-red-500'>{formMik.errors.firstName}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Last Name'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='Last Name' 
                                    name={'lastName'}
                                    value={formMik.values.lastName}
                                    onChange={formMik.handleChange('lastName')}
                                />
                                {
                                    formMik.errors.lastName && (
                                        <Text className='text-red-500'>{formMik.errors.lastName}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Email Address'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='Email@email.com' 
                                    name={'email'}
                                    value={formMik.values.email}
                                    onChange={formMik.handleChange('email')}
                                />
                                {
                                    formMik.errors.email && (
                                        <Text className='text-red-500'>{formMik.errors.email}</Text>
                                    )
                                }
                            </div>
                            <div className='my-4'>
                                <Text>{'Date of Birth'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    name={'dof'}
                                    type={'date'}
                                    id={'dof'}
                                    value={formMik.values.dof}
                                    onChange={formMik.handleChange('dof')}
                                />
                                {
                                    formMik.errors.dof && (
                                        <Text className='text-red-500'>{formMik.errors.dof}</Text>
                                    )
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <Button label={"Previous"} type={"button"} onClick={handlePrevious}/>
                                <Button label={"Next"} type={"button"} onClick={handleNext}/>
                            </div>
                            
                        </div>
                    )}
                    
                    {step === 2 && (
                        <div>
                            <div>
                                <Text >{'Street Address'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='Street Address'
                                    name={'streetAddress'}
                                    value={formMik.values.streetAddress}
                                    onChange={formMik.handleChange('streetAddress')}
                                />
                                {
                                    formMik.errors.streetAddress && (
                                        <Text className='text-red-500'>{formMik.errors.streetAddress}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text >{'City'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='City'
                                    name={'city'}
                                    value={formMik.values.city}
                                    onChange={formMik.handleChange('city')}
                                />
                                {
                                    formMik.errors.city && (
                                        <Text className='text-red-500'>{formMik.errors.city}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text >{'State'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='State'
                                    name={'state'}
                                    value={formMik.values.state}
                                    onChange={formMik.handleChange('state')}
                                />
                                {
                                    formMik.errors.state && (
                                        <Text className='text-red-500'>{formMik.errors.state}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text >{'Zip Code'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='Zip Code'
                                    name={'zipCode'}
                                    value={formMik.values.zipCode}
                                    onChange={formMik.handleChange('zipCode')}
                                />
                                {
                                    formMik.errors.zipCode && (
                                        <Text className='text-red-500'>{formMik.errors.zipCode}</Text>
                                    )
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <Button label={"Previous"} type={"button"} onClick={handlePrevious}/>
                                <Button label={"Next"} type={"button"} onClick={handleNext}/>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <div>
                                <Text >{'Username'}</Text>
                                <Input 
                                    className='block border-neutral-400 border'
                                    placeholder='username'
                                    type='text'
                                    value={formMik.values.username}
                                    onChange={formMik.handleChange('username')}
                                />
                                {
                                    formMik.errors.username && (
                                        <Text className='text-red-500'>{formMik.errors.username}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text >{'Password'}</Text>
                                
                                <Input 
                                    className='block border-neutral-400 border'
                                    type={'text'}
                                    id={'password'}
                                    name={'password'}
                                    placeholder='Enter your password'
                                    value={formMik.values.password}
                                    onChange={formMik.handleChange('password')}
                                    
                                />
                                {
                                    formMik.errors.password && (
                                    <Text className='text-red-500'>{formMik.errors.password}</Text>
                                    )
                                }
                            </div>
                            <div className='flex items-center justify-between'>
                                <Button label={"Previous"} type={"button"} onClick={handlePrevious}/>
                                <Button label={"Submit"} type={"submit"}/>
                            </div>
                        </div>
                    )}
                </form>
            </Card>
        </Card>
        
    )
};

export default HomeContainer