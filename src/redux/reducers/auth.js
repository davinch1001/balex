import axios from "axios";

const AUTH = 'AUTH'
const CODE = 'CODE'

const initState = {
    authData:{},
    userPass: '',
    userEmail: '',
    status: 'signed-out'
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

const hasher = (email, password) => {
    let token = email + ":" + password;
    let hash = btoa(token);
    return "Basic " + hash;
}

export const postCode = (code) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/users/activateUser',
            headers: {
                "Content-Type": "application/json",
                "Authorization": hasher(initState.userEmail, initState.userPass)
            },
            data: {
                activationCode: code
            }
        }).then((data)  => dispatch({type: CODE,  activationCode: data.activationCode}) )
    }
}

export const postDocInfo = (documentType, documentNumber, address, country) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://shipper-back.herokuapp.com/api/users/saveDocumentInfo',
            headers:{
                "Content-Type": "application/json",
                "Authorization": hasher(initState.userEmail, initState.userPass)
            },
            data: {
                documentNumber: documentNumber,
                documentType: documentType,
                country: country,
                address: address
            }
        }).then( (data) => {
                if(data.data.successful){
                    dispatch({type: AUTH, authData: data.data.object, status: 'signed-in'})
                }
            }

        )
    }
};

export const login = (username, password) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://shipper-back.herokuapp.com/api/users/login',
            headers: {
                "Content-Type": "application/json",
                "Authorization": hasher(username, password)
            }
        })
            .then((data) => {
                if(data.data.successful){
                    dispatch({type: AUTH, authData: data.data.object, status: 'signed-in'}) /*??*/
                }else {
                    dispatch({type: AUTH, authData: null, status: 'signed-out'}) /*??*/
                }
            })
    }
};

export const logout = (username, password) => {
    return (dispatch) => {
        dispatch({type: AUTH, authData: null, status: 'signed-out'})
    }
};

export const preChangePassword = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://shipper-back.herokuapp.com/api/users/preChangePassword',
            headers: {
                "Content-Type": "application/json",
                "Authorization": hasher(initState.userEmail, initState.password)
            }
        })
            .then((data) => {
                if(data.data.successful){
                    dispatch({type: AUTH, authData: data.data.object, status: 'signed-in'}) /*??*/
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
                "Authorization": hasher(initState.userEmail, initState.password)
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
                    dispatch({type: AUTH, authData: null, status: 'signed-out'}) /*??*/
                }
            })
    }
};






