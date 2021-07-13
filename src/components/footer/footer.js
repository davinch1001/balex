import React from 'react';
import footerLogo from '../../../src/img/header/logo-header.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__block">
                <div className="footer__logo">
                    <img className="footer__logo-img" src={footerLogo} alt='logo'/>
                    <p className="footer__description">Сервис доставки посылок <br/>
                        из США</p>
                </div>
                <button className="footer__get-address-btn">Получить адрес</button>
                <div className="footer__support">
                    <h2 className='support-title'>Поддержка</h2>
                    <p className="email">Email:balex@gmail.com</p>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;