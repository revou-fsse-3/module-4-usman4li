import { Button, Input, Text, Card } from '../../Components';
import { useFormik } from 'formik';
//import { useState } from 'react';
import * as yup from 'yup';
//import PageContainer from '../PageContainer';
import HomeContainer from '../HomeContainer';

const LoginContainer = () => {

    const formMik = useFormik ({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => console.log(values),
        validationSchema: yup.object({
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

    const handleInsertToken = () => {
        localStorage.setItem('token', 'aslkfjslel')
    }

    return(
        <Card border={false} className={''}>
            <Card border>
                <form onSubmit={formMik.handleSubmit}>
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
                    <Button label={"Login"} type={"button"} onClick={handleInsertToken}/>
                    <div>
                        <Text>{'----- OR -----'}</Text>
                    </div>
                    <Button label={"Register"} type={"button"} onClick={HomeContainer}/>
                </form>

            </Card>
        </Card>
    )
}

export default LoginContainer