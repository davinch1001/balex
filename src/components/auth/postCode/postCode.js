import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postCode} from "../../../redux/reducers/auth";
import md5 from "md5";
import StepBtn from "../stepBtn/stepBtn";

const PostCode = ({getIndex, stepsTabs}) => {

    const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        getIndex(1)
    }
    const postHandler = (e) => {
        e.preventDefault()
         dispatch(postCode(e.target.children[4].children[1].value))
        console.log('code===>',e.target.children[4].children[1].value)
        getIndex(3)
    }
    return (
        <form onSubmit={postHandler} className='post-code'>
            <h2 className="post-code__title">Подтверждение</h2>
            <p className='registr__subtitle'>уже есть акканут? <span style={{color:"#EF8C3B"}}>Войдите</span></p>
            <StepBtn stepsTabs={stepsTabs}/>
            <p className="post-code__description">Вам на почту отправлен код. Введите код для подтверждение аккаутнта</p>
            <div className='post-code__input-block'>
                <span className="input-text">Code</span>
                <input type="text" className="post-code__input"/>
            </div>
            <div className="post-code__btns">
                <button onClick={formHandler} className='post-code__btn cancel' >Отмена</button>
                <button type='submit' className='post-code__btn'>Далее</button>
            </div>
        </form>
    );
};

export default PostCode;