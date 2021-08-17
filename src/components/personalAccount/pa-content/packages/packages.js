import React from 'react';

import packagesImg from '../../../../img/persAcc/packages-img.png'
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../../redux/reducers/order";

const order = {name:'nb745h3', remain: '4 дня', price: '1800₽', date:'08.07.2021'}

const Packages = () => {
    const user = JSON.parse(localStorage.getItem('userEmailPass'))
    const dispatch = useDispatch()


    const packages = JSON.parse(localStorage.getItem('myOrders'))
    console.log('packages====>',packages.map((el) => el))
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

                       <p className="packages__price packages__item">Цена</p>
                       <p className="packages__date packages__item">Дата</p>

                </div>

                <>
                    {packages.map((el) =>(
                        <div className="packages__user-info">
                            <div className="name"> <p className="packages__name">{el.trackNumber}</p></div>


                                <p className="packages__price packages__item">{el.description}</p>
                                <p className="packages__date packages__item">{el.dateTime}</p>
                        </div>
                    ))

                    }

                </>

                {
                    packages.map((el) => (
                        <div className='packages__responsive-packages-info'>
                            <div className="packages__user-packages-info">
                                <div className="headings">
                                    <p className="heading">Имя</p>
                                    <p className="heading">Цена</p>
                                    <p className="heading">Дата</p>
                                </div>
                                <div className="user-packages-info">
                                    <p className="user-packages-item">{el.trackNumber}</p>
                                    <p className="user-packages-item">{el.description}</p>
                                    <p className="user-packages-item">{el.dateTime}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>

        </>

    );
};

export default Packages;