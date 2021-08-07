import React from 'react';

import homeImg from '../../../src/img/home/delivery.png'
import balex from '../../../src/img/home/BALEX.png'
import sky from '../../../src/img/home/sky.png'
import air from '../../../src/img/home/air.png'
import usa from '../../../src/img/home/usa.png'
import Auth from "../auth/auth";
import SingIn from "../auth/signin/singIn";
import {useDispatch, useSelector} from "react-redux";

const Home = ({activeModal, setActiveModal, activeSignIn, setActiveSignIn}) => {
    const userSignedIn = useSelector(s => s.auth.status)
    return (
        <section className="home" id='home'>

            <div onClick={() => setActiveModal(false)}
                 className={activeModal ? 'authorization active' : 'authorization'}>
                <div onClick={e => e.stopPropagation()} className="auth-block"><Auth activeSignIn={setActiveSignIn} activeModal={activeModal}
                                                                                     setActiveModal={setActiveModal}/>
                </div>
            </div>

            <div onClick={() => setActiveSignIn(false)}
                 className={activeSignIn ? 'authorization active' : 'authorization'}>
                <div onClick={e => e.stopPropagation()} className="auth-block"><SingIn setActive={setActiveSignIn}/>
                </div>
            </div>

            <div className="container">
                <div className="home__home-block">
                    <img src={sky} alt="" className="home__sky1"/>
                    <img src={sky} alt="" className="home__sky2"/>
                    <img src={sky} alt="" className="home__sky3"/>
                    <div className="home__text-block">
                        <h1 className="home__title">
                            Быстрая доставка товаров <br/> из США <img className='usa' src={usa} alt=""/>
                        </h1>
                        <p className="home__abouts">
                            Доверьте нам доставку ваших покупок из США. Чтобы получить адрес в США, зарегистрируйтесь на
                            сайте.
                            Добавляйте номера отправлений покупок в личном кабинете
                            и ожидайте их скорого прибытия в Бишкек. Делаем доставку быстро, надежно и с заботой о
                            посылке.
                        </p>
                        <img src={air} className='home__air' alt=""/>
                        <button className="home__get-address-btn">Получить адрес</button>

                    </div>
                    <div className="home__img-block">
                        <img className='home-img' src={homeImg} alt=""/>
                        <img src={balex} className='home__balex' alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;