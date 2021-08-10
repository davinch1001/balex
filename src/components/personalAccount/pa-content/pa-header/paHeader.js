import React, {useState} from 'react';
import headerLogo from '../../../../img/persAcc/logo-removebg-preview 1.png'
import lupa from '../../../../img/persAcc/lupa.png'
import vectorDown from '../../../../img/header/vector-down-header.png'
import userAva from '../../../../img/persAcc/header-user-logo.jpg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";

const PaHeader = ({toggleTab}) => {

    const [addActive, setAddActive] = useState(false)

    const user = localStorage.getItem('auth')
    const userData = JSON.parse(user)

    const openLoginModal = () => {
        const img = document.querySelector('.pa-header__view-more-btn').classList.toggle('active')
        setAddActive(!addActive)
    }

    return (
        <header className="pa-header">
            <div className="container">
                <div className="pa-header__nav">
                    <Link to='/'><img src={headerLogo} alt="" className="pa-header__logo"/></Link>
                    <div className="pa-header__input-block">
                        <input placeholder='Поиск посылок' type="text" className="input"/>
                        <img src={lupa} alt="" className="pa-header__input-magnifier"/>
                    </div>
                    <div className="pa-header__user-data">
                        <div className="pa-header__price"><span className="pa-header__price-balance">Balance:</span>  <span className="pa-header__price-value">00.00$</span></div>
                        <div onClick={() => openLoginModal()} className="pa-header__user-login">
                            <img src={userAva} alt="" className="user-login-ava"/>
                            <div className="user">{userData.name} {userData.surName}</div>
                            <button className="pa-header__view-more-btn"><img src={vectorDown} alt="" className="pa-header__view-more"/></button>
                            <CSSTransition
                                in={addActive}
                                timeout={500}
                                classNames="alert"
                                unmountOnExit
                            >
                               <div onClick={e => e.stopPropagation()} className='user-data-modal'>
                                   <img src={userAva} alt="" className="user-login-ava"/>
                                   <div className="user-names">{userData.name} {userData.surName}</div>
                                   <span className='user-email'>{userData.email}</span>
                                   <div className="btns">
                                       <button onClick={() => toggleTab(1)} className='add-order-btn'>Добвить</button>
                                       <button onClick={() => toggleTab(5)} className='help-btn'>Помощь</button>
                                   </div>
                                   <button onClick={() => toggleTab(6)} className="settings">Настройки</button>
                               </div>
                            </CSSTransition>

                        </div>

                    </div>

                </div>
            </div>
        </header>
    );
};

export default PaHeader;