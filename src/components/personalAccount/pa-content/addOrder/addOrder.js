import React from 'react';
import {useDispatch} from "react-redux";
import {createOrder, getAllOrders} from "../../../../redux/reducers/order";

const AddOrder = () => {
    const user = JSON.parse(localStorage.getItem('userEmailPass'))
    console.log(user)
    const dispatch = useDispatch()
    const orderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder(e.target.children[1].children[0].children[1].value, e.target.children[1].children[1].children[1].value,e.target.children[2].children[1].value, user.userEmail, user.userPass ))
        dispatch(getAllOrders(user.userEmail, user.userPass))
    }
    return (
        <form onSubmit={orderHandler} action="" className="order">
            <h2 className='order__title'>Новая посылка</h2>
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
                <button  type='submit' className="order__btn save">Далее</button>
            </div>
        </form>
    );
};

export default AddOrder;