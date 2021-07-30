import React from 'react';

const Price = () => {
    return (
        <div className='price-calc'>
            <h2 className="price-calc__title">Стоимость доставки</h2>
            <div className="price-calc__box">
                <div className="calc__counter">
                    <select className="price-calc__country-input"  name="" id="">
                        <option value="">Aмерика</option>
                        <option value="">Кыргызстан</option>
                        <option value="">Украина</option>
                        <option value="">Россия</option>
                    </select>
                    <div className="kg-sm">
                        <input type="text" placeholder="Киллограм" className="price-calc__kilogram-input"/>
                        <input type="text" placeholder='Сантиметр' className="price-calc__centimeter-input"/>
                    </div>
                    <div className="w-h">
                        <input type="text" placeholder='Вес' className="price-calc__mass-input"/>
                        <input type="text" placeholder='Длинна' className="price-calc__length-input"/>
                        <input type="text" placeholder='Ширина' className="price-calc__width-input"/>
                        <input type="text"  placeholder='Высота' className="price-calc__height-input"/>
                    </div>
                </div>
                <div className="price-calc__price-box">
                    <div className="price-calc__prices">
                        <span className="prices">Цена</span>
                        <span className="price-value">4 644 com</span>
                        <button className='price-btn'>Рассчитать Цену</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;