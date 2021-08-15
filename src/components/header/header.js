import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logoHeader from '../../../src/img/header/logo-header-2.png'
import lengTrans from '../../../src/img/header/leng-icon.svg'
import account from '../../../src/img/header/account.png'
import {useSelector} from "react-redux";

const Header = ({activeModal, setActiveModal, setActiveSignIn, activeSignIn}) => {
    const [openBurger, setOpenBurger] = useState(false)
    const userSignIn = useSelector(s => s.auth.status)
    const wdt = window.innerWidth
    return (
        <header className="header">
            <div className="container">
            <div className="header__nav">
                <div  className="header__logo"><a href="#home"><img src={logoHeader} alt="logo"/></a></div>
                <div className={openBurger ? 'header__burger active' : 'header__burger'}>
                <div className={openBurger ? 'header__nav-items active' : 'header__nav-items'}>
                    <a href="#store" className="header__nav-link">Магазин</a>
                    <a href="#delivery" className="header__nav-link">Доставка</a>
                    <a href="#calc" className="header__nav-link">Стоимость</a>
                    <a href="#contact" className="header__nav-link">Контакты</a>
                    <a href="#faq" className="header__nav-link">F.A.Q</a>
                </div>
                <div className={openBurger ? 'header__personal-account active' : 'header__personal-account'}>
                    <img  src={lengTrans} alt=""/> <span className='after'></span>

                    {userSignIn === 'signed-in' ? <div style={{display:"flex", alignItems: "center"}}> <img src={account} alt=""/><Link className='personal-account-text' to='/personalAccount'> Личный кабинет</Link></div> :
                       <div>
                           <button className='header__auth-btn' onClick={() => setActiveSignIn(!activeSignIn)}>Войти </button>
                           <button className='header__auth-btn' onClick={() => setActiveModal(!activeModal)}>Регистрация</button>
                       </div>
                    }
            </div>
                </div>
                <div onClick={() => setOpenBurger(!openBurger)} className='header__burger-open-btn'><img width={'30px'} src="https://www.pinclipart.com/picdir/big/532-5328945_menu-bar-icon-white-clipart-png-download-menu.png"
                                                                                                         alt=""/></div>
            </div>
            </div>
        </header>
    );
};

export default Header;