import axios from "axios";
import hash from "./hash";

const ORDER = 'ORDER'
const GETORDER = 'GETORDER'
const GETORDERLOCAL = 'GETORDERLOCAL'

const initState = {
    order: {},
    myOrders: {},
}

export default (state = initState, action) => {
    switch (action.type){
        case GETORDER:{
            return {...state ,myOrders: action.myOrders, userPass: action.userPass, userEmail:action.userEmail, status: 'signed-in'}
        }
        case ORDER:{
            return {...state, order: action.order, userPass: action.userPass, userEmail:action.userEmail}
        }
        case GETORDERLOCAL:{
            return {...state, myOrders: action.myOrders}
        }
        default: return state
    }
}

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
                dispatch({type: GETORDER, myOrders: data.data.object, userEmail:userEmail, userPass:userPass, success: data.data.successful})
                console.log('zip')
            }).catch(() => {
            console.log('')
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


export const getAllOrderLocal = (myOrders) => {
    return (dispatch) => {
        dispatch({type: GETORDERLOCAL, myOrders: myOrders})

    }
}



