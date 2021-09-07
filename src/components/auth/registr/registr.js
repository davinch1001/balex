import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserDatals, postUserData} from "../../../redux/reducers/auth";
import StepBtn from "../stepBtn/stepBtn";
import load from '../../../img/loading-buffering.gif'

const Registr = ({getIndex, stepsTabs}) => {

    const [preloader, setPreloader] = useState(false)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [err, setErr] = useState(false)

    const dispatch = useDispatch()
    const userData = useSelector(s => s.auth.authData)

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(postUserData(e.target.children[0].children[1].value, e.target.children[1].children[1].value, e.target.children[2].children[1].value,e.target.children[3].children[1].value, e.target.children[4].children[1].value,))
        const pass = e.target.children[4].children[1].value
        const passAgain = e.target.children[5].children[1].value
        if(Object.keys(userData).length !== 0){
            getIndex(2)
        }else if(userData === ''){
            setTimeout(() => {
                setErr(true)
                setPreloader(false)
            }, 3000)
            setPreloader(false)

        }else{
            setErr(false)
        }
        setPreloader(true)
    }

    const showPass = () => {
        let input = document.querySelector('#registr__pass')
        setShow(!show)
        if(input.type === 'password'){
            input.type = 'text'
        }else{
            input.type = 'password'
        }
    }

    const showPassAgain = () => {
        let input = document.querySelector('#registr__pass2')
        setShow2(!show2)
        if(input.type === 'password'){
            input.type = 'text'
        }else{
            input.type = 'password'
        }
    }

    return (
        <div className='registr-block'>
            <h2 className='registr__title'>Регистрация</h2>
            <p className={err ? 'registr__err active' : 'registr__err'}> {err && userData === '' ? 'Такой пользоватьль уже существует' : 'Успешно!'}  </p>
            <StepBtn stepsTabs={stepsTabs}/>
        <form className='registr' onSubmit={formHandler}>
            <div className='registr__input-block'>
                <span className='registr__input-text'>Имя</span>
                <input required id='input' type="text"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Фамилия</span>
                <input required type="text"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Email</span>
                <input required type="email" className="registr__input"/>
            </div>


            <div className='registr__input-block'>
                <span className='registr__input-text'>Номер</span>
                <input required type="number"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Пароль</span>
                <input required type="password" id='registr__pass'  className="registr__input"/>
                <p onClick={() => showPass()}>
                    {
                        show ?  <i className="far fa-eye-slash"></i> :
                            <i className='far fa-eye'></i>
                    }
                </p>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Повторите пароль</span>
                <input required type="password" id='registr__pass2' className="registr__input"/>
                <p onClick={() => showPassAgain()}>
                    {
                        show2 ?  <i className="far fa-eye-slash"></i> :
                            <i className='far fa-eye'></i>
                    }
                </p>
            </div>


            <div className="registr__btns">
                {
                    userData === '' ? <button type='submit' className='registr__btn'>Отправить<img className={preloader ? 'registr__load active' : 'registr__load'} width='20px' src={load}
                                                                                                                      alt=""/></button> :
                        <button type='submit' className='registr__btn'> {userData === '' ? 'Отправить' : 'Следущий шаг'}</button>


                }
            </div>
        </form>
        </div>
    );
};

export default Registr;

// const formHandler =(e) => {
//     e.preventDefault()
// dispatch(postUserData(e.target.children[0].value, e.target.children[1].value, e.target.children[2].value,e.target.children[3].value, e.target.children[4].value))