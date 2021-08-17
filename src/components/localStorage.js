import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserData, getUserDatals, getUserEmailPass} from "../redux/reducers/auth";
import {getAllOrderLocal} from "../redux/reducers/order";

const LocalStorage = () => {
    const dispatch = useDispatch()
    const authDatas = useSelector(s => s.auth.authData)
    const userEmail = useSelector(s => s.auth.userEmail)
    const userPass = useSelector(s => s.auth.userPass)
    const userEmailAndPass = useSelector(s => s.auth.userEmailPass)
    const userEmailAndPass2 = useSelector(s => s.auth.userEmailPass2)
    const myOrders = useSelector(s => s.order.myOrders)


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('auth'))
        const userEmailPass = JSON.parse(localStorage.getItem('userEmailPass'))
        const myOrders = JSON.parse(localStorage.getItem('myOrders'))
        dispatch(getUserData(userData, userEmail, userPass,userEmailPass))
        console.log(userEmailPass)
        dispatch(getUserEmailPass(userEmailPass))
        dispatch(getAllOrderLocal(myOrders))
    }, [])

    useEffect(() => {
        localStorage.setItem('myOrders', JSON.stringify(myOrders))
    },[myOrders])

    useEffect(() => {
        localStorage.setItem('userEmailPass', JSON.stringify(userEmailAndPass))
    },[userEmailAndPass, userEmailAndPass2])


    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(authDatas))
    },[authDatas])


    return (
        <div>

        </div>
    );
};

export default LocalStorage;