import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserData, getUserDatals, getUserEmailPass} from "../redux/reducers/auth";

const LocalStorage = () => {
    const dispatch = useDispatch()
    const authDatas = useSelector(s => s.auth.authData)
    const userEmail = useSelector(s => s.auth.userEmail)
    const userPass = useSelector(s => s.auth.userPass)
    const userEmailAndPass = useSelector(s => s.auth.userEmailPass)


    useEffect(() => {
        const userEmail = JSON.parse(localStorage.getItem('userEmailPass'))
        dispatch(getUserEmailPass(userEmail))
    }, [])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('auth'))
        dispatch(getUserData(userData))
    }, [])

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(authDatas))
    },[authDatas])

    useEffect(() => {
        localStorage.setItem('userEmailPass', JSON.stringify(userEmailAndPass))
    },[userEmailAndPass])

    return (
        <div>

        </div>
    );
};

export default LocalStorage;