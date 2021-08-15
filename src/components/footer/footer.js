import React from 'react';
import footerLogo from '../../../src/img/footer/footer-logo.png'

const Footer = ({setActiveModal}) => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__block">
                <div className="footer__logo">
                    <img className="footer__logo-img" src={footerLogo} alt='logo'/>
                    <p className="footer__description">Сервис доставки посылок
                        из США</p>
                </div>
                <button onClick={() => setActiveModal(true)} className="footer__get-address-btn">Получить адрес</button>
                <div className="footer__support">
                    <h2 className='support-title'>Поддержка</h2>
                    <p className="email">Email:balex@gmail.com</p>
                    <div className="social">
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-telegram-plane"></i>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;