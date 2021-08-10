import React from 'react';
import headerLogo from '../../../../img/persAcc/logo-removebg-preview 1.png'
import lupa from '../../../../img/persAcc/lupa.png'
import card from '../../../../img/persAcc/card.png'
import userAva from '../../../../img/persAcc/Ellipse 1.png'
import {Link} from "react-router-dom";

const PaHeader = () => {
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
                        <div className="pa-header__price"><h4><span className="pa-header__price__balance">Balance:</span>  <span className="pa-header__price__value">00.00$</span></h4></div>
                        <div className="">
                            <img src={userAva} alt="" className="pa-header__user-login__user_ava"/>
                            <div className="user">Aibek Jumagulov</div>
                            {/*<button className="view-more"><img src="" alt="" className="prev-store__view-more"/></button>*/}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default PaHeader;