import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postCode} from "../../../redux/reducers/auth";
import StepBtn from "../stepBtn/stepBtn";

const PostCode = ({getIndex, stepsTabs, setActiveSignIn, setActiveModal}) => {

    const [codeErr, setCodeErr] = useState(false)

    const userData = useSelector(s => s.auth.authData)

    const openSingIn = (e) => {
        e.preventDefault()
        setActiveSignIn(true)
        setActiveModal(false)
    }

    const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        getIndex(1)
    }
    const postHandler = (e) => {
        e.preventDefault()
         dispatch(postCode(e.target.children[4].children[1].value))
        console.log('code===>',e.target.children[4].children[1].value)
        if(userData.isActivated === 1){
            getIndex(3)
        }setCodeErr(true)

    }
    return (
        <form onSubmit={postHandler} className='post-code'>
            <h2 className="post-code__title">Подтверждение</h2>
            <p className='registr__subtitle'>уже есть акканут? <button onClick={openSingIn} style={{color:"#EF8C3B"}}>Войдите</button></p>
            <StepBtn stepsTabs={stepsTabs}/>
                   <p className='post-code__description'>{userData.isActivated === 1 ? 'Success' : 'err'}</p>
            <div className='post-code__input-block'>
                <span className="input-text">Code</span>
                <input maxLength={6} required  type="text" className="post-code__input"/>
            </div>
            <div className="post-code__btns">
                <button onClick={formHandler} className='post-code__btn cancel' >Отмена</button>
                <button type='submit' className='post-code__btn'>Далее</button>
            </div>
        </form>
    );
};

export default PostCode;