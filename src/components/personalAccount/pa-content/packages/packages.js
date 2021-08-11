import React from 'react';

import packagesImg from '../../../../img/persAcc/packages-img.png'
import {useSelector} from "react-redux";

const order = {name:'nb745h3', remain: '4 дня', price: '1800₽', date:'08.07.2021'}

const Packages = () => {
    const packages = useSelector(s => s.auth.order)
    console.log('packages====>',packages)
    return (
        <>
            <h2 className="empty-packages__title">Посылки</h2>
            <div className='empty-packages'>
                <p className="empty-packages__subtitle">Нет посылки, Зарегистрируйте её.</p>
                <p className="empty-packages__description">Добавьте номер отслеживания (tracking number) ожидаемой посылки, чтобы знать, когда она поступит на склад.</p>
                <img src={packagesImg} alt="" className="empty-packages__img"/>
            </div>

            <div className="packages">
                <div className="packages__info">
                    <div className="name"> <p className="packages__name">Имя</p></div>
                   <div className="time-packages">
                       <p className="packages__remained packages__item">Осталось</p>
                       <p className="packages__price packages__item">Цена</p>
                       <p className="packages__date packages__item">Дата</p>
                   </div>
                </div>

                <>

                        <div className="packages__user-info">
                            <div className="name"> <p className="packages__name">{order.name}</p></div>
                            <div className="time-packages">
                                <p className="packages__remained packages__item">{order.remain}</p>
                                <p className="packages__price packages__item">{order.price}</p>
                                <p className="packages__date packages__item">{order.date}</p>
                            </div>
                        </div>
                </>


                <div className='packages__responsive-packages-info'>
                    <div className="packages__user-packages-info">
                        <div className="headings">
                            <p className="heading">Имя</p>
                            <p className="heading">Осталось</p>
                            <p className="heading">Цена</p>
                            <p className="heading">Дата</p>
                        </div>
                        <div className="user-packages-info">
                            <p className="user-packages-item">{order.name}</p>
                            <p className="user-packages-item">{order.remain}</p>
                            <p className="user-packages-item">{order.price}</p>
                            <p className="user-packages-item">{order.date}</p>
                        </div>
                    </div>
                </div>

            </div>



        </>

    );
};

export default Packages;