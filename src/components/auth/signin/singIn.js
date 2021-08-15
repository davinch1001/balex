import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/reducers/auth";

const SingIn = ({setActive}) => {
    const userData = useSelector(s => s.auth.authData)
    const [err, serErr] = useState(false)
    const dispatch = useDispatch()
    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(login(e.target.children[0].children[1].value, e.target.children[1].children[1].value))
        if(Object.keys(userData).length === 0){
         serErr(true)
        }
    }
    return (
        <div className='sign-in'>
            <h2 className="sign-in__title">Войти</h2>
            <button onClick={() => setActive(false)} className="auth__closeBtn"><i className="fas fa-times"></i></button>
            {
                err ? ( <span className="sign-in__err">Ошибка входа, проверьте Email или пароль и повторите попытку</span>) : (<span className="sign-in__subtitle">Добро Пожаловать</span>)
            }
            <form onSubmit={loginHandler} className='sign-in__form'>
                <div className="sign-in__input-block">
                    <span className="input-text">eMail</span>
                    <input required type="email" className="sign-in__input"/>
                </div>
                <div className="sign-in__input-block">
                    <span className="input-text">Password</span>
                    <input required type="password" className="sign-in__input"/>
                </div>
                <button type='submit' className="sign-in__btn">Войти</button>
            </form>

        </div>

    );
};

export default SingIn;