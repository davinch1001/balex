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
         dispatch(postCode(e.target.children[3].children[1].value))
        console.log('code===>',e.target.children[3].children[1].value)
        if(userData.isActivated === 1) {
            getIndex(3)
        }else{setCodeErr(true)}

    }
    return (
        <form onSubmit={postHandler} className='post-code'>
            <h2 className="post-code__title">Подтверждение</h2>
            <StepBtn stepsTabs={stepsTabs}/>
            {
                userData.isActivated !== 1 ? <span className='post-code__err'>{userData.isActivated !== 1 ? 'Вам на почту был отправлен код' : 'Err'}</span> :
                    <p className='post-code__description'>{codeErr ? 'Код подтвержден' : 'Err'}</p>
            }

            <div className='post-code__input-block'>
                <span className="input-text">Code</span>
                <input required  type="number" maxLength={6} className="post-code__input"/>
            </div>
            <div className="post-code__btns">
                <button onClick={formHandler} className='post-code__btn cancel' >Отмена</button>
                <button type='submit' className='post-code__btn'>Далее</button>
            </div>
        </form>
    );
};

export default PostCode;