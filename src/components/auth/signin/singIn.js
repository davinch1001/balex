import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/reducers/auth";

const SingIn = ({setActive}) => {
    const status = useSelector(s => s.auth.status)
    const dispatch = useDispatch()
    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(login(e.target.children[0].children[1].value, e.target.children[1].children[1].value))
        if(status === 'signed-in') {
            setActive(false)
        }setActive(false)

    }
    return (
        <div className='sign-in'>
            <h2 className="sign-in__title">Войти</h2>
            <span className="sign-in__subtitle">Добро Пожаловать</span>
            <form onSubmit={loginHandler} className='sign-in__form'>
                <div className="sign-in__input-block">
                    <span className="input-text">eMail</span>
                    <input type="email" className="sign-in__input"/>
                </div>
                <div className="sign-in__input-block">
                    <span className="input-text">Password</span>
                    <input type="password" className="sign-in__input"/>
                </div>
                <button type='submit' className="sign-in__btn">Войти</button>
            </form>

        </div>

    );
};

export default SingIn;