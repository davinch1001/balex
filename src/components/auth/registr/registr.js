import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postUserData} from "../../../redux/reducers/auth";
import StepBtn from "../stepBtn/stepBtn";

const Registr = ({getIndex, stepsTabs}) => {

    const authDatas = useSelector(s => s.auth.authData)
    const pass = useSelector(s => s.auth.userEmail)
    const email = useSelector(s => s.auth.userPass)
    const dispatch = useDispatch()
    console.log('=============>',authDatas)

    const hash = (email, password) => {
        let token = email + ":"  + password;
        let hash = btoa(token);
        return `Basic ${hash}`;
    }
    const hashData = hash(email, pass)
    console.log('hashdata', hashData)

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(authDatas))
        localStorage.setItem('authPass', JSON.stringify(hashData))
    },[authDatas])

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(postUserData(e.target.children[0].children[1].value, e.target.children[1].children[1].value, e.target.children[2].children[1].value, e.target.children[3].children[1].value, e.target.children[4].children[1].value))
        getIndex(2)
        console.log('e.target',e.target.children[1].children[1].value,e.target.children[2].children[1].value)
    }
    return (
        <>
            <h2 className='registr__title'>Регистрация</h2>
            <p className='registr__subtitle'>уже есть акканут? <span style={{color:"#EF8C3B"}}>Войдите</span></p>
            <StepBtn stepsTabs={stepsTabs}/>
        <form className='registr' onSubmit={formHandler}>
            <div className='registr__input-block'>
                <span className='registr__input-text'>Имя</span>
                <input id='input' type="text"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Фамилия</span>
                <input type="text"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Email</span>
                <input type="text" className="registr__input"/>
            </div>


            <div className='registr__input-block'>
                <span className='registr__input-text'>Номер</span>
                <input type="number"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Пароль</span>
                <input type="text"  className="registr__input"/>
            </div>

            <div className='registr__input-block'>
                <span className='registr__input-text'>Пороль</span>
                <input type="text"  className="registr__input"/>
            </div>



            <div className="registr__btns">

                <button type='submit' className="registr__btn">Далее</button>
            </div>
        </form>
        </>
    );
};

export default Registr;

// const formHandler =(e) => {
//     e.preventDefault()
// dispatch(postUserData(e.target.children[0].value, e.target.children[1].value, e.target.children[2].value,e.target.children[3].value, e.target.children[4].value))