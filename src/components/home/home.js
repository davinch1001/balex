import React from 'react';
import homeImg from '../../../src/img/home/delivery.png'
import sky from '../../../src/img/home/sky.png'

const Home = () => {
    return (
        <section className="home">

            <div className="container">
                <div className="home__home-block">
                    <img src={sky} alt="" className="home__sky1"/>
                    <img src={sky} alt="" className="home__sky2"/>
                    <img src={sky} alt="" className="home__sky3"/>
                    <div className="home__text-block">
                        <h1 className="home__title">
                            Быстрая доставка товаров <br/> из США
                        </h1>
                        <p className="home__abouts">
                            Доверьте нам доставку ваших покупок из США. Чтобы получить адрес в США, зарегистрируйтесь на
                            сайте.
                            Добавляйте номера отправлений покупок в личном кабинете
                            и ожидайте их скорого прибытия в Бишкек. Делаем доставку быстро, надежно и с заботой о посылке.
                        </p>
                        <button className="home__get-address-btn">Получить адрес</button>

                    </div>
                    <div className="home__img-block">
                        <img src={homeImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;