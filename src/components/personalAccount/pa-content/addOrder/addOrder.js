import React from 'react';
import {useDispatch} from "react-redux";
import {createOrder, getAllOrders} from "../../../../redux/reducers/auth";

const AddOrder = () => {
    const dispatch = useDispatch()
    const orderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder(e.target.children[0].value, e.target.children[1].value,e.target.children[3].value))
        dispatch(getAllOrders())
    }
    return (
        <form onSubmit={orderHandler} action="" className="order">
            <input type="text" className="order__input"/>
            <input type="text" className="order__input"/>
            <input type="text" className="order__input"/>
            <div className="order__btns">
                <button className="order__btn cancel">Отмена</button>
                <button type='submit' className="order__btn save">Далее</button>
            </div>
        </form>
    );
};

export default AddOrder;