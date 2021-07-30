import React from 'react';

import packagesImg from '../../../../img/persAcc/packages-img.png'

const Packages = () => {
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
                <div className="packages__user-info">
                    <div className="name"> <p className="packages__name">nb745h3</p></div>
                    <div className="time-packages">
                        <p className="packages__remained packages__item">4 дня</p>
                        <p className="packages__price packages__item">1800₽</p>
                        <p className="packages__date packages__item">08.07.2021</p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Packages;