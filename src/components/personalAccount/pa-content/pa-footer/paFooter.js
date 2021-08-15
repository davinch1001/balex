import React from 'react';

const PaFooter = ({setActiveModal}) => {
    return (
        <footer className='pa-footer'>
                <div className="container">
                    <div className='pa-footer__items'>
                        <p className="pa-footer__item">Политика конфиденциальности</p>
                        <p className="pa-footer__item">Соглашение с пользователем</p>
                        <p className="pa-footer__item">Статус</p>
                    </div>
                </div>
        </footer>
    );
};

export default PaFooter;