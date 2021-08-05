import React, {useState} from 'react';
import PaHeader from "./pa-content/pa-header/paHeader";

import packagesIcon from '../../../src/img/menu/packages.png'
import priceIcon from '../../../src/img/menu/price.png'
import adressIcon from '../../../src/img/menu/adress.png'
import helpIcon from '../../../src/img/menu/help.png'
import settingsIcon from '../../../src/img/menu/settings.png'
import Packages from "./pa-content/packages/packages";
import Price from "./pa-content/price/price";
import Address from "./pa-content/address/address";
import Help from "./pa-content/help/help";
import Settings from "./pa-content/settings/settings";
import PaFooter from "./pa-content/pa-footer/paFooter";
import {useDispatch} from "react-redux";
import {createOrder} from "../../redux/reducers/auth";

const PersonalAccount = () => {
    const [toggleState, setToggleState] = useState(1)
    const menuItem = [{img: packagesIcon, value: 'Посылка'},{img: priceIcon, value: 'Стоимость'},{img: adressIcon, value: 'Адрес'},{img: helpIcon, value: 'Помощь'},{img: settingsIcon, value: 'Настройки'}]
    const toggleTab = (idx) => {
        setToggleState(idx)
    }
    const dispatch = useDispatch()
    const orderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder(e.target.children[0].value, e.target.children[2].value,e.target.children[3].value))
    }
    return (
        <div className='personal-account'>
            <PaHeader/>
            <div className="tabs">
                <div className='menu'>
                    <button className="btn-add">Добавить</button>
                    <form onSubmit={orderHandler} action="" className="order">
                        <input type="text" className="order__input"/>
                        <input type="text" className="order__input"/>
                        <input type="text" className="order__input"/>
                        <button className="order__btn">Отмена</button>
                        <button type='submit' className="order__btn">Далее</button>
                    </form>
                    {
                        menuItem.map((el, idx) => (
                            <div className='menu__menu-item' key={idx}>
                                <img src={el.img} className='svg' alt=""/>
                                <button onClick={() => toggleTab(idx+1)} className={toggleState === idx+1 ? 'menu__menu-link active' : 'menu__menu-link' }>{el.value}</button>
                            </div>
                        ))
                    }
                </div>
                <div className='content'>
                    <div className={toggleState === 1 ? 'packages-route active' : 'packages-route' }>
                        <Packages/>
                    </div>
                    <div className={toggleState === 2 ? 'price active' : 'price' }>
                        <Price/>
                    </div>
                    <div className={toggleState === 3 ? 'address-block active' : 'address-block' }>
                        <Address/>
                    </div>
                    <div className={toggleState === 4 ? 'help-block active' : 'help-block' }>
                        <Help/>
                    </div>
                    <div className={toggleState === 5 ? 'settings-block active' : 'settings-block' }>
                        <Settings/>
                    </div>
                </div>
            </div>
            <PaFooter/>
        </div>
    );
};

export default PersonalAccount;