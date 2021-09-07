import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/reducers/auth";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import load from '../../../img/loading-buffering.gif'

const SingIn = ({setActive}) => {
    const history = useHistory()
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    const [preloader, setPreloader] = useState(false)


    const showPass = () => {
        let input = document.querySelector('#pass')
       setShow(!show)
        if(input.type === 'password'){
            input.type = 'text'
        }else{
            input.type = 'password'
        }
    }

    const userData = useSelector(s => s.auth.authData)
    const status = useSelector(s => s.auth.status)
    const dispatch = useDispatch()

    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(login(e.target.children[0].children[1].value, e.target.children[1].children[1].value))
        setPreloader(true)
        if( userData !== ''){
            setPreloader(false)
            history.push('/personalAccount')
        }else {
            setErr(true)
        }

    }

    return (
        <div className='sign-in'>
            <h2 className="sign-in__title">Войти</h2>
            <button onClick={() => setActive(false)} className="auth__closeBtn"><i className="fas fa-times"></i></button>
            {
                !err ? (<span className='sign-in__subtitle' >{err ? 'err' : 'Welcome'}</span>) : (<span className='sign-in__subtitle'> {userData !== '' ? `Вход выполнен нажимите на "перейти" чтоб попасть в личный кабинет` : userData === '' ? <span style={{color:'#EF8C3B'}}>Ошибка входа проверьте данные</span>  : 'err' }</span>)
            }
            <form onSubmit={loginHandler} className='sign-in__form'>
                <div className="sign-in__input-block">
                    <span className="input-text">eMail</span>
                    <input required type="email" className="sign-in__input"/>
                </div>
                <div className="sign-in__input-block">
                    <span className="input-text">Password</span>
                    <input required type="password" id='pass' className="sign-in__input"/>
                    <p onClick={() => showPass()}>
                        {
                            show ?  <i className="far fa-eye-slash"></i> :
                                <i className='far fa-eye'></i>
                        }
                        </p>
                </div>
                <p className='sign-in__to-auth-btn'>Нет Аккаунта?<Link to='/auth' className='sign-in__registr' >Зарегистрируйтесь</Link></p>
                <button type='submit' className="sign-in__btn">{userData !== '' ? 'Перейти' : "Войти" }
                    <img className={preloader ? 'sign-in__load active' : 'sign-in__load'} width='20px' src={load} alt=""/>
                </button>
            </form>

        </div>

    );
};

export default SingIn;