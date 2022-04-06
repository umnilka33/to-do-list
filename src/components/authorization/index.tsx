import React, { useState } from 'react';
import Input from '../../common/simple-input/input';
import { login } from '../../redux/actions/actionsCreator';
import {useDispatch} from "react-redux";
import './authorization.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className='authorization'>
            <div className="authorization__header">Sign in</div>
            <Input onChange={handleEmailInputChange} value={email} type="text" placeholder="Email..."/>
            <Input onChange={handlePasswordInputChange} value={password} type="password" placeholder="Password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login({email, password}))} >GO</button>
        </div>
    );
};

export default Login;
