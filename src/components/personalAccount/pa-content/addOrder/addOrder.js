import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import order, {createOrder, getAllOrders} from "../../../../redux/reducers/order";

const AddOrder = ({toggleTab}) => {
    const orders = useSelector(s => s.order.order)
    const user = JSON.parse(localStorage.getItem('userEmailPass'))
    console.log(user)
    const dispatch = useDispatch()
    const orderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder(e.target.children[1].children[0].children[1].value, e.target.children[1].children[1].children[1].value,e.target.children[2].children[1].value, user.userEmail, user.userPass ))
    if(Object.keys(orders).length !== 0){
        window.location.reload()
    }
    }
    return (
        <form onSubmit={orderHandler} action="" className="order">
            <h2 className='order__title'>Новый товар</h2>
            <div style={{display:'flex'}}>
            <div className="order__input-block">
                <span className='order__input-text'>Содержимое Посылки</span>
                <input required placeholder='MackBook Pro' type="text" className="order__input"/>
            </div>
            <div className="order__input-block price-prod">
                <span className='order__input-text'>Цена</span>
                <input required placeholder='1220$' type="number" className="order__input"/>
            </div>
            </div>
            <div className="order__input-block track">
                <span className='order__input-text'>Трекинг Номер</span>
                <input required placeholder='4569846489468652313218445' type="text" className="order__input"/>
            </div>

            <div className="order__btns">
                <button className="order__btn cancel">Отмена</button>
                {
                    Object.keys(orders).length !== 0 ? <button  onClick={() =>  toggleTab(2)} className= 'order__btn save' type='button'> 'Перейти в посылки' </button> :
                            <button  type='submit' className= 'order__btn save'> Отправить </button>
                }

            </div>
<div className={orders.status === 200 ? 'order__modal-success active' : 'order__modal-success'}>Товар успешно добавлен</div>
        </form>
    );
};

export default AddOrder;