import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

import vectorDown from '../../../src/img/home/vector-dwm.png'
import lupa from '../../../src/img/store/Vector.png'


const Store = () => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [search, setSearch] = useState('')
    const storeLinks = ['Автозапчасти', 'Для молодых мам', 'Акссесуары', 'Для детей', 'Для экстремального спорта', 'Женская одежда', 'Игрушки', 'Игрушки', 'Автозапчасти', 'Для молодых мам', 'Акссесуары', 'Для детей', 'Для экстремального спорта', 'Женская одежда', 'Игрушки', 'Игрушки', 'Автозапчасти', 'Для молодых мам', 'Акссесуары', 'Для детей', 'Для экстремального спорта', 'Женская одежда', 'Игрушки', 'Игрушки', 'Игрушки', 'Автозапчасти', 'Для молодых мам', 'Акссесуары', 'Для детей', 'Для экстремального спорта', 'Женская одежда', 'Игрушки', 'Игрушки']
    const addActive = () => {
        document.querySelector('.store__catalog').classList.toggle('active')
        document.querySelector('.view-more-img').classList.toggle('active')
    }
    const openStores = (e) => {
        Array.from(document.getElementsByClassName('store__store-links')).map((store, idx) => {
            return +e.target.id === idx ? store.classList.toggle('active') : store
        })
    }

    return (
        <section id='store' className="store">
            <h2 className="store__title">Магазин</h2>
            <div className="store__search">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Поиск'
                       className="store__input"/>
                <img src={lupa} className='lupa' alt=""/>
            </div>
            <div className="container">
                <div className="store__catalog">
                    {storeLinks.map((el) => el.toLowerCase()).filter((el) => el.includes(search.toLowerCase())).map((el, idx) => (
                        <div className='store__catalog-items' key={idx}>
                            <div id={idx} onClick={openStores} className='store__catalog-item'>{capitalizeFirstLetter(el)}</div>
                            <div className="store__store-links">
                                {/*<Swiper*/}
                                {/*    slidesPerView={1} spaceBetween={30} loop={true} pagination={{*/}
                                {/*    "clickable": true*/}
                                {/*}} navigation={true}*/}
                                {/*    className="mySwiper">*/}
                                {/*    {*/}
                                {/*        sliderItems.map((link) => (*/}
                                {/*            <div>*/}
                                {/*            <SwiperSlide classNAme='swiper-box'>1</SwiperSlide>*/}
                                {/*            <SwiperSlide>2</SwiperSlide>*/}
                                {/*            <SwiperSlide>3</SwiperSlide>*/}
                                {/*            <SwiperSlide>4</SwiperSlide>*/}
                                {/*            <SwiperSlide>5</SwiperSlide>*/}
                                {/*            </div>*/}
                                {/*        ))*/}
                                {/*    }*/}
                                {/*</Swiper>*/}
                            </div>
                        </div>))}

                </div>
                <a href='#store' className="store__view-more" onClick={addActive}>Смотреть дальше <img
                    className='view-more-img'
                    src={vectorDown} alt=""/>
                </a>
            </div>
        </section>
    );
};

export default Store;