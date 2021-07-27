import React from 'react';

const Calc = () => {
    return (
        <section className='calc' id='calc'>
            <h1 className="calc__title">Стоимость</h1>
            <div className="calc__box">
            <div className="calc__counter">
                <select className="calc__country-input"  name="" id="">
                    <option value="">Aмерика</option>
                    <option value="">Кыргызстан</option>
                    <option value="">Украина</option>
                    <option value="">Россия</option>
                </select>
                <div className="kg-sm">
                    <input type="text" placeholder="Киллограм" className="calc__kilogram-input"/>
                   <input type="text" placeholder='Сантиметр' className="calc__centimeter-input"/>
               </div>
               <div className="w-h">
                   <input type="text" placeholder='Вес' className="calc__mass-input"/>
                   <input type="text" placeholder='Длинна' className="calc__length-input"/>
                   <input type="text" placeholder='Ширина' className="calc__width-input"/>
                   <input type="text"  placeholder='Высота' className="calc__height-input"/>
               </div>
            </div>
                <div className="calc__price-box">
                    <div className="calc__price">
                        <span className="price">Цена</span>
                        <span className="price-value">4 644 com</span>
                        <button className='price-btn'>Рассчитать</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calc;