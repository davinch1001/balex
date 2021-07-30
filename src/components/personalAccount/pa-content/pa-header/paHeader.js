import React from 'react';
import headerLogo from '../../../../img/persAcc/logo-removebg-preview 1.png'
import lupa from '../../../../img/persAcc/lupa.png'
import card from '../../../../img/persAcc/card.png'
import userAva from '../../../../img/persAcc/Ellipse 1.png'
import {Link} from "react-router-dom";

const PaHeader = () => {
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

export default PaHeader;