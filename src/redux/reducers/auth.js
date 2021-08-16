import axios from "axios";
import {useDispatch} from "react-redux";
import Calc from "../../components/calc/calc";

const AUTH = 'AUTH'
const ORDER = 'ORDER'
const DOC = 'DOC'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const GETORDER = 'GETORDER'
const GETUSERDATA = 'GETUSERDATA'
const USEREMAILUSERPASS = 'USEREMAILUSERPASS'
const CALC = 'CALC'


const initState = {
    authData:{},
    userEmail: '',
    userPass: '',
    status: 'signed-out',
    success: '',
    order: {},
    myOrders: {},
    sum: [],
    userEmailPass: {}
}




export default (state = initState, action) => {
    switch (action.type) {
        case CALC:{
            return{...state, sum: action.sum}
        }
        case AUTH: {
            return {...state, authData: action.authData, userEmailPass: action.userEmailPass, userPass: action.userPass, userEmail:action.userEmail, status: "signed-in", success: action.success}
        }
        case GETUSERDATA: {
            return {...state, authData: action.authData, userEmail:action.userEmail, userPass: action.userPass, status: action.status,success: action.success}
        }
        case ORDER:{
            return {...state, order: action.order, userPass: action.userPass, userEmail:action.userEmail}
        }
        case USEREMAILUSERPASS:{
            return {...state, userEmailPass: action.userEmailPass}
        }
        case DOC: {
            return {...state, authData: action.authData, userPass: action.userPass, userEmail:action.userEmail }
        }
        case LOGIN:{
            return {...state, authData: action.authData,userEmailPass:action.userEmailPass, userPass: action.userPass, userEmail:action.userEmail, status: 'signed-in', success: action.success}
        }
        case LOGOUT:{
            return {...state, authData: action.authData, status: 'signed-out'}
        }
        case GETORDER:{
            return {...state ,myOrders: action.myOrders,userPass: action.userPass, userEmail:action.userEmail, status: 'signed-in'}
        }

        default:
            return state;
    }
}

// export const getUserDatals = (userData) => {
//     return (dispatch) => {
//         if(Object.keys(userData).length !== 0){
//             dispatch({type: GETUSERDATA, authData: userData, status: 'signed-in'})
//         } else dispatch({type: GETUSERDATA  , authData: userData})
//     }
// }

export const getUserData = (userData, userEmailPass) => {
    return (dispatch, getState) => {
        const {userEmail, userPass} = getState().auth
        dispatch({type: GETUSERDATA, authData: userData, userEmailPass: userEmailPass, userEmail: userEmail, userPass: userPass, status: 'signed-in'})
    }
}

export const getUserEmailPass = (userEmailPass) => {
    return(dispatch) => {
        if(userEmailPass !== null){
            dispatch({type: USEREMAILUSERPASS, userEmailPass})
        }else {dispatch({type: USEREMAILUSERPASS, userEmailPass})}

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
                    dispatch({type: AUTH, authData: data.data.object, userEmail: user_email, userPass: user_pass, userEmailPass: {user_email,user_pass}, status: 'sign-in', success: data.data.successful})
                }
            })
    }
}

const hash = (email, password) => {
    let token = email + ":"  + password;
    let hash = btoa(token);
    return `Basic ${hash}`;
}

export const postCode = (code) => {
    return (dispatch, getState) => {
        const {userEmail, userPass} = getState().auth
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/users/activateUser',
            headers: {
                "Authorization": hash(userEmail, userPass),
                "Content-Type": "application/json"
            },
            data: {
                activationCode: code
            }
        }).then((data) => {
            if(data.data.successful){
                dispatch({type: AUTH, authData: data.data.object,userEmail: userEmail, userEmailPass: {userEmail,userPass}, userPass: userPass, status: 'sign-in', success: data.data.successful})
            }
        })
    }
}

export const postDocInfo = (documentType, documentNumber, address, country) => {
    return (dispatch, getState) => {
        const {userEmail, userPass} = getState().auth
        console.log('======>', userEmail , userPass)
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/users/saveDocumentInfo',
            headers:{
                "Authorization": hash(userEmail, userPass),
                "Content-Type": "application/json",
            },
            data: {
                documentType: documentType,
                documentNumber: documentNumber,
                address: address,
                country: country
            }
        }).then( (data) => {
                if(data.data.successful){
                    dispatch({type: DOC, authData: data.data.object,userEmailPass: {userEmail,userPass}, userEmail:userEmail, userPass: userPass, status: 'signed-in',success: data.data.successful})
                }
            }

        )
    }
};

export const login = (userEmail, userPass) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://shipper-back.herokuapp.com/api/users/login',
            headers: {
                "Authorization": hash(userEmail, userPass),
                "Content-Type": "application/json"
            }
        })
            .then((data) => {
                if(data.data.successful){
                    dispatch({type: LOGIN, authData: data.data.object, userEmailPass: {userEmail, userPass}, userEmail: userEmail, userPass: userPass,  status: 'signed-in', success: data.data.successful}) /*??*/
                }
            })
    }
};

export const logout = () => {
    return (dispatch) => {
        dispatch({type: LOGOUT, authData: '', userEmailPass: '', order: '', userEmail: '', userPass: '', status: 'signed-out'})
    }
};

export const preChangePassword = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://shipper-back.herokuapp.com/api/users/preChangePassword',
            headers: {
                "Content-Type": "application/json",
                "Authorization": hash(initState.userEmail, initState.password)
            }
        })
            .then((data) => {
                if(data.data.successful){
                    dispatch({type: AUTH, authData: data.data.object, status: 'signed-in', success: data.data.successful}) /*??*/
                }else {
                    dispatch({type: AUTH, authData: null, status: 'signed-out'}) /*??*/
                }
            })
    }
};

export const changePassword = (oldPassword, securityCode, newPassword) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://shipper-back.herokuapp.com/api/users/changePassword',
            headers: {
                "Content-Type": "application/json",
                "Authorization": hash(initState.userEmail, initState.password)
            },
            data: {
                oldPassword: oldPassword,
                securityCode: securityCode,
                newPassword: newPassword
            }
        })
            .then((data) => {
                if(data.data.successful){
                    dispatch({type: AUTH, authData: data.data.object, status: 'signed-out-password-changed'}) /*??*/
                }else {
                    dispatch({type: AUTH, authData: null, userEmailPass: '', status: 'signed-out'}) /*??*/
                }
            })
    }
};


export const createOrder = ( trackNumber, description, price,userEmail, userPass) => {
    return (dispatch) => {
        console.log((userEmail, userPass, price))
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/order/create',
            headers: {
                "Authorization": hash(userEmail, userPass),
                "Content-Type": "application/json"
            },
            data: {
                trackNumber: trackNumber,
                description: description,
                priceFromInvoice: +price
            }
        })
            .then((data) => {
                dispatch({type: ORDER, order: data, userEmail:userEmail, userPass:userPass, success: data.data.successful})
            })
    }
};

export const getAllOrders = (userEmail, userPass) =>{
    return (dispatch) => {
        console.log('order get=====>', userEmail, userPass)
        axios({
            method: 'get',
            url: 'https://shipper-back.herokuapp.com/api/order/getMyOrders',
            headers: {
                "Authorization": hash(userEmail, userPass),
                "Content-Type": "application/json"
            }
        })
            .then((data) => {
                dispatch({type: GETORDER,myOrders: data.object, userEmail:userEmail, userPass:userPass, success: data.data.successful})
            })
    }
};

export const getCalcValue2 = (kg, sm, mass, length, wtd, hgt) => {
    return (dispatch) =>{
        dispatch({type: CALC, sum: (+kg + +sm + +mass + +length + +wtd + +hgt) * (12 * 86)})
    }
}








