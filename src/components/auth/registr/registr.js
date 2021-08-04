import React from 'react';
import {useDispatch} from "react-redux";
import {postUserData} from "../../../redux/reducers/auth";

const Registr = ({getIndex, setIndex}) => {
    const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(postUserData(e.target.children[1].value, e.target.children[2].value, e.target.children[3].value, e.target.children[4].value, e.target.children[5].value))
        getIndex(2)
    }
    return (
        <>
        <form className='registr' onSubmit={formHandler}>
            <h2>Регистрация</h2>
            <input type="text" placeholder='Введите имя' className="registr__input"/>
            <input type="text" placeholder='Введите фамилию ' className="registr__input"/>
            <input type="text" placeholder='Введите email ' className="registr__input"/>
            <input type="text" placeholder='Введите пароль' className="registr__input"/>
            <input type="number" placeholder='Введите номер' className="registr__input"/>
            <div className="registr__btns">
                <button  className="registr__btn cancel">Отмена</button>
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