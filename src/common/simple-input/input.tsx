import React from 'react';
import './input.css'

type SimpleInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    type: string
    placeholder: string
}

const Input = ({onChange, value = '', type = 'text', placeholder = 'Type anything..' }: SimpleInputProps) => (
    <input onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder} />
);

export default Input;