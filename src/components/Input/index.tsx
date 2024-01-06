import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = (props : InputProps) => {

    return (
        <input type='text' {...props} className={`${props.className} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}/>
    )
};

export default Input