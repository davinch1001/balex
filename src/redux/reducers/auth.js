import axios from "axios";

const AUTH = 'AUTH'
const CODE = 'CODE'

const initState = {
    authData:{},
    userPass: '',
    userEmail: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case AUTH: {
            return {...state, authData: action.authData, userPass: action.userPass, userEmail:action.userEmail}
        }
        default:
            return state;
    }
}

export const postUserData = (user_name, user_last_name, user_email, user_pass, user_num) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/users/register',
            headers: {
              "Content-Type": "application/json"
            },
            data: {
                name: user_name,
                surName: user_last_name,
                email: user_email,
                password: user_pass,
                phoneNumber: user_num
            }
        })
            .then((data) => {
                if(data.data.successful){
                    dispatch({type: AUTH, authData: data.data.object, userPass: user_pass})
                }
            })
    }
}

// const hasher = (email, password) => {
//     let token = email + ":" + password;
//
//     // Should i be encoding this value????? does it matter???
//     // Base64 Encoding -> btoa
//     let hash = btoa(token);
//
//     return "Basic " + hash;
// }
//
// export const postCode = (code) => {
//     return (dispatch) => {
//         axios({
//             method: 'post',
//             url: 'https://shipper-back.herokuapp.com/api/users/activateUser',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": hasher(initState.userEmail, initState.userPass)
//             },
//             data: {
//                 activationCode: code
//             }
//         }).then((data)  => dispatch({type: CODE,  activationCode: data.activationCode}) )
//     }
//
// }