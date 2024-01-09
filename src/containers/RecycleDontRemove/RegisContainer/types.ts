import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface RegistrationFormData {
  email: string;
  username: string;
  password: string;
}

const useUserFormik = (onSubmit: (values: RegistrationFormData) => void) => {
  const initialValues: RegistrationFormData = {
    email: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    username: Yup.string().required('Username is Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};

export default useUserFormik;