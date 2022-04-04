import React, { useState } from 'react';
import Input from '../../common/simple-input/input';
import './authorization.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className='authorization'>
            <div className="authorization__header">Авторизация</div>
            <Input onChange={handleEmailInputChange} value={email} type="text" placeholder="Введите email..."/>
            <Input onChange={handlePasswordInputChange} value={password}/*onClick={() => dispatch(login(email, password))}*/  type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" >Войти</button>
        </div>
    );
};

export default Login;
