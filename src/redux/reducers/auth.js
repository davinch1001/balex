import axios from "axios";
import hash from "./hash";

const AUTH = 'AUTH'
const DOC = 'DOC'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const GETUSERDATA = 'GETUSERDATA'
const USEREMAILUSERPASS = 'USEREMAILUSERPASS'
const UPDATE = 'UPDATE'


const initState = {
    authData:{},
    userEmail: '',
    userPass: '',
    status: 'signed-out',
    success: '',
    userEmailPass: {},
    updateUser: {}
}




export default (state = initState, action) => {
    switch (action.type) {
        case AUTH: {
            return {...state, authData: action.authData, userEmailPass: action.userEmailPass, userPass: action.userPass, userEmail:action.userEmail, status: "signed-in", success: action.success}
        }
        case GETUSERDATA: {
            return {...state, authData: action.authData,userEmailPass:action.userEmailPass, userEmail:action.userEmail, userPass: action.userPass, status: action.status,success: action.success}
        }
        case USEREMAILUSERPASS:{
            return {...state, userEmailPass: action.userEmailPass}
        }
        case DOC: {
            return {...state, authData: action.authData, userEmailPass: action.userEmailPass, userPass: action.userPass, userEmail:action.userEmail }
        }
        case LOGIN:{
            return {...state, authData: action.authData,userEmailPass:action.userEmailPass, userPass: action.userPass, userEmail:action.userEmail, status: 'signed-in', success: action.success}
        }
        case LOGOUT:{
            return {...state, authData: action.authData, status: 'signed-out'}
        }
        case UPDATE: {
            return {...state, authData: action.authData}
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

export const getUserData = (userData, userEmail, userPass, userEmailPass) => {
    return (dispatch) => {
        dispatch({type: GETUSERDATA, authData:userData, userEmailPass: userEmailPass, userEmail: userEmail, userPass: userPass, status: 'signed-in'})
    }
}

export const getUserEmailPass = (userEmailPass) => {
    return (dispatch) => {
            dispatch({type: USEREMAILUSERPASS, userEmailPass})
    }
}

export const postUserData = (user_name, user_last_name, user_email,user_num ,user_pass ) => {
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



export const updateUser = (name, surName, phoneNumber, documentType,documentNumber,country,address, userEmail, userPass ) => {
    console.log(userEmail, userPass, 'id')
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/users/update',
            headers: {
                "Content-Type": "application/json",
                "Authorization": hash(userEmail, userPass)
            },
            data: {
            "address": address,
            "country": country,
            "documentNumber": documentNumber,
            "documentType": documentType,
            "id": 5,
            "name": name,
            "phoneNumber": phoneNumber,
            "surName": surName
        }
        }).then((data) => {
            if(data.data.successful){
                dispatch({type: UPDATE, authData: data.data.object}) /*??*/
            }else {
                dispatch({type: UPDATE, authData: data.data.object}) /*??*/
            }
        })
    }
}










