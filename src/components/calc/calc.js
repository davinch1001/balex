import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCalcValue} from "../../redux/reducers/calc";


const Calc = () => {
const dispatch = useDispatch()

    const price = useSelector(s => s.auth.sum)

    const calcHandler = (e) => {
    e.preventDefault()
     dispatch(getCalcValue(e.target.children[0].children[1].children[0].value,e.target.children[0].children[1].children[1].value,e.target.children[0].children[2].children[0].value,e.target.children[0].children[2].children[1].value,e.target.children[0].children[2].children[2].value,e.target.children[0].children[2].children[3].value))
    }


    return (
        <section className='calc' id='calc'>
            <h1 className="calc__title">Стоимость</h1>
            <form onSubmit={calcHandler} className="calc__box">
            <div className="calc__counter">
                <select className="calc__country-input"  name="" id="">
                    <option value="">Aмерика</option>
                    <option value="">Кыргызстан</option>
                    <option value="">Украина</option>
                    <option value="">Россия</option>
                </select>
                <div className="kg-sm">
                    <input type="number" placeholder='Киллограм'  className="calc__kilogram-input"/>
                   <input type="number" placeholder='Сантиметр' className="calc__centimeter-input"/>
               </div>
               <div className="w-h">
                   <input type="number" placeholder='Вес' className="calc__mass-input"/>
                   <input type="number" placeholder='Длинна' className="calc__length-input"/>
                   <input type="number" placeholder='Ширина' className="calc__width-input"/>
                   <input type="number"  placeholder='Высота' className="calc__height-input"/>
               </div>
            </div>
                <div className="calc__price-box">
                    <div className="calc__prices">
                        <span className="prices">Цена</span>
                        <span className="price-value">{price} com</span>
                        <button type='submit' className='price-btn'>Рассчитать</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Calc;