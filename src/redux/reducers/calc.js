const CALC = 'CALC'

const initState = {
    sum: ''
}

export default (state = initState, action) => {
    switch (action.type){
        case CALC:{
            return{...state, sum: action.sum}
        }
        default: return state
    }
}

export const getCalcValue = (kg, sm, mass, length, wtd, hgt) => {
    return (dispatch) =>{
        dispatch({type: CALC, sum: +kg + +sm + +mass + +length + +wtd + +hgt})
    }
}