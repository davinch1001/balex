import axios from "axios";

const AUTH = 'AUTH'
const ORDER = 'ORDER'
const DOC = 'DOC'
const LOGIN = 'LOGIN'
const GETORDER = 'GETORDER'

const initState = {
    authData:{},
    userEmail: '',
    userPass: '',
    status: 'signed-out',
    order: {},
    successfulStatus: '',
    myorders: {}
}




export default (state = initState, action) => {
    switch (action.type) {
        case AUTH: {
            return {...state, authData: action.authData, userPass: action.userPass, userEmail:action.userEmail, status: "signed-in" }
        }
        case ORDER:{
            return {...state, order: action.order, userPass: action.userPass, userEmail:action.userEmail}
        }
        case DOC: {
            return {...state, authData: action.authData, userPass: action.userPass, userEmail:action.userEmail }
        }
        case LOGIN:{
            return {...state, authData: action.authData, userPass: action.userPass, userEmail:action.userEmail, status: 'signed-in'}
        }
        case GETORDER:{
            return {...state ,authData: action.authData, userPass: action.userPass, userEmail:action.userEmail, status: 'signed-in', myorders: action.myorders}
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
                    dispatch({type: AUTH, authData: data.data.object, userEmail: user_email, userPass: user_pass, status: 'sign-in'})
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
                dispatch({type: AUTH, authData: data.data.object,userEmail: userEmail, userPass: userPass, status: 'sign-in'})
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
                    dispatch({type: DOC, authData: data.data.object, userEmail:userEmail, userPass: userPass, status: 'signed-in',})
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
                    dispatch({type: LOGIN, authData: data.data.object,userEmail: userEmail, userPass: userPass,  status: 'signed-in'}) /*??*/
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
                "Authorization": hash(initState.userEmail, initState.password)
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
                    dispatch({type: AUTH, authData: null, status: 'signed-out'}) /*??*/
                }
            })
    }
};


export const createOrder = ( trackNumber, description, price) => {
    return (dispatch, getState) => {
        const {userEmail, userPass} = getState().auth
        console.log('order=====>', userEmail, userPass)
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
                priceFromInvoice: price
            }
        })
            .then((data) => {
                dispatch({type: ORDER, order: data, userEmail:userEmail, userPass:userPass})
            })
    }
};

export const getAllOrders = () =>{
    return (dispatch, getState) => {
        const {userEmail, userPass} = getState().auth
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
                dispatch({type: GETORDER, userEmail:userEmail, userPass:userPass, myorders: data.object})
            })
    }
};






