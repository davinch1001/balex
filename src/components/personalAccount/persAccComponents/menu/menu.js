import React from 'react';
import {Link} from "react-router-dom";

import packagesIcon from '../../../../../src/img/menu/packages.png'
import priceIcon from '../../../../../src/img/menu/price.png'
import adressIcon from '../../../../../src/img/menu/adress.png'
import helpIcon from '../../../../../src/img/menu/help.png'
import settingsIcon from '../../../../../src/img/menu/settings.png'

const Menu = () => {
    const menuItem = [{img: packagesIcon, value: 'Посылка'},{img: priceIcon, value: 'Стоимость'},{img: adressIcon, value: 'Адрес'},{img: helpIcon, value: 'Помощь'},{img: settingsIcon, value: 'Настройки'}]
    return (
        <div className='menu'>
            {
                menuItem.map((el) => (
                    <div className='menu__menu-item'>
                        <img src={el.img} className='svg' alt=""/>
                        <Link className="menu__menu-link">{el.value}</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Menu;