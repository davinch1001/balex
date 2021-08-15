import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserDatals, getUserEmailPass} from "../redux/reducers/auth";

const LocalStorage = () => {
    const dispatch = useDispatch()
    const authDatas = useSelector(s => s.auth.authData)
    const userEmail = useSelector(s => s.auth.userEmail)
    const userPass = useSelector(s => s.auth.userPass)
    const userEmailPass = [userEmail,userPass]

    console.log(userEmail, userPass)


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('auth'))
        dispatch(getUserDatals(userData))
        const userEmailPass = JSON.parse(localStorage.getItem('userEmailPass'))
        dispatch(getUserEmailPass(userEmailPass))
    }, [])

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(authDatas))
    },[authDatas])

    useEffect(() => {
        localStorage.setItem('userEmailPass', JSON.stringify(userEmailPass))
    },[userEmailPass])

    return (
        <div>

        </div>
    );
};

export default LocalStorage;