import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/user";
import type { RootState } from '../../redux/store'
import './logout.css';

const Logout = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const dispatch = useDispatch();

    return (
        <div className="logout">
            {isAuth && <div className="logout__btn" onClick={() => dispatch(logout())}>Выход</div>}
        </div>
    );
};

export { Logout };