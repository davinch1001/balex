import React from 'react';
import headerLogo from '../../../../../src/img/persAcc/logo-removebg-preview 1.png'
import lupa from '../../../../../src/img/persAcc/lupa.png'
import card from '../../../../../src/img/persAcc/card.png'
import userAva from '../../../../../src/img/persAcc/Ellipse 1.png'
import {Link} from "react-router-dom";

const PersAccHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <Link to='/'><img src={headerLogo} alt="" className="header__logo"/></Link>
                    <div className="header__input-block">
                        <input placeholder='Поиск посылок' type="text" className="input"/>
                        <img src={lupa} alt="" className="header__input-magnifier"/>
                    </div>
                    <div className="header__user-data">
                        <div className="header__price"><img src={card} alt=""/>00.00$</div>
                        <div className="header__user-login">
                            <img src={userAva} alt="" className="user-logo"/>
                            <div className="user">User.U</div>
                            <button className="view-more">^</button>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default PersAccHeader;