import React from 'react';
// import {useDispatch} from "react-redux";
// import {postCode} from "../../../redux/reducers/auth";

const PostCode = ({getIndex}) => {
    // const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        getIndex(3)
    }
    // const postHandler = (e) => {
    //     e.preventDefault()
    //      dispatch(postCode(e.target.children[1].value))
    //     getIndex(3)
    // }
    return (
        <form className='post-code'>
            <h2 className="post-code__title">Введите код с эл.почты</h2>
            <input type="text" className="post-code__input"/>
            <div className="post-code__btns">
                <button onClick={formHandler} className='post-code__btn cancel' >Отмена</button>
                <button type='submit' className='post-code__btn'>Далее</button>
            </div>
        </form>
    );
};

export default PostCode;