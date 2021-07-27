import React from 'react';
import item1 from '../../../src/img/delivery/item-1.png'
import item2 from '../../../src/img/delivery/item-2.png'
import item3 from '../../../src/img/delivery/item-3.png'
import item4 from '../../../src/img/delivery/item-4.png'
import step1 from '../../../src/img/delivery/step1.png'
import step2 from '../../../src/img/delivery/step2.png'
import step3 from '../../../src/img/delivery/step3.png'


const Delivery = () => {
    const increaseImg = (e) => {
        e.preventDefault()
        document.querySelector('.step-img').classList.toggle('active')
    }

    return (
        <section className="delivery" id='delivery'>
            <h2 className="delivery__main-title">Доставка</h2>
            <div className="container">
                <div className="delivery__advantages">
                    <div className="delivery__advantages-box">
                        <div className="img-box box1">
                            <img src={item1} alt=""/>
                        </div>
                        <h2 className="delivery__title">Экономно</h2>
                        <p className="delivery__subtitle">Наши клиенты не платят налог с продаж</p>
                    </div>
                    <div className="delivery__advantages-box">
                        <div className="img-box box2">
                            <img src={item2} alt=""/>
                        </div>
                        <h2 className="delivery__title">Надежно</h2>
                        <p className="delivery__subtitle">Наши клиенты не платят налог с продаж</p>
                    </div>
                    <div className="delivery__advantages-box">
                        <div className="img-box box3">
                            <img src={item3} alt=""/>
                        </div>
                        <h2 className="delivery__title">Быстро</h2>
                        <p className="delivery__subtitle">Наши клиенты не платят налог с продаж</p>
                    </div>
                    <div className="delivery__advantages-box">
                        <div className="img-box box4">
                            <img src={item4} alt=""/>
                        </div>
                        <h2 className="delivery__title">Просто</h2>
                        <p className="delivery__subtitle">Наши клиенты не платят налог с продаж</p>
                    </div>
                </div>

            <h2 className="delivery__main-subtitle">
                Выполните три простых шага, чтобы получить покупку из США
            </h2>
                <div onClick={increaseImg} className="delivery__steps">
                    <div className="delivery__step-box">
                        <h2 className="step-number">Шаг 1</h2>
                        <p className="step-title">Получите персональный адрес в США</p>
                        <p className="step-subtitle">Зарегистрируйтесь на сайте, чтобы получить адрес в США. Это займет 1 минуту.
                        </p>
                        <img className='step-img' src={step1} alt=""/>
                    </div>
                    <div className="delivery__step-box">
                        <h2 className="step-number">Шаг 2</h2>
                        <p className="step-title">Отправьте покупку на полученный адрес</p>
                        <p className="step-subtitle">Зарегистрируйтесь на сайте, чтобы получить адрес в США. Это займет 1 минуту.</p>
                        <img className='step-img' src={step2} alt=""/>
                    </div>
                    <div className="delivery__step-box">
                        <h2 className="step-number">Шаг 2</h2>
                        <p className="step-title">Примите посылки в Бишкеке</p>
                        <p className="step-subtitle">Доставка займет от 7 дней с момента отправки. В кабинете можно следить за статусом доставки и отслеживать вашу посылку.</p>
                        <img className='delivery__steps' src={step3} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;