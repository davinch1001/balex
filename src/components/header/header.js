import React from 'react';
import {Link} from "react-router-dom";
import logoHeader from '../../../src/img/header/logo-header.png'
import lengTrans from '../../../src/img/header/leng-icon.svg'
import account from '../../../src/img/header/account.png'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
            <div className="header__nav">
                <div className="header__logo"><img src={logoHeader} alt="logo"/></div>
                <div className="header__nav-items">
                    <a href="#store" className="header__nav-link">Магазин</a>
                    <a href="#" className="header__nav-link">Доставка</a>
                    <a href="#" className="header__nav-link">Стоимость</a>
                    <a href="#" className="header__nav-link">Контакты</a>
                    <a href="#" className="header__nav-link">F.A.Q</a>
                </div>
                <div className="header__personal-account">
                    <img  src={lengTrans} alt=""/> <span className='after'></span>
                    <img src={account} alt=""/>
                    <Link className='personal-account-text' to='/personalAccount'> Личный кабинет</Link>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;