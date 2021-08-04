import React from 'react';

const Settings = () => {
    return (
        <div className='settings'>
            <h2 className="settings__title">Настройки аккаунта</h2>
            <div className="settings__form">
                <form action="">
                <div className="settings__user-data">
                    <div className="settings__input-block">
                        <span className="input-text">Имя</span>
                        <input type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block">
                        <span className="input-text">Фамилия</span>
                        <input type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block">
                        <span className="input-text">Телефон</span>
                        <input type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block">
                        <span className="input-text">Email</span>
                        <input type="text" className="settings-input"/>
                    </div>
                </div>

                <div className="settings__user-data data">

                    <div className="settings__input-block data">
                        <span className="input-text">ИНН</span>
                        <input type="text" className="settings__settings-input-data"/>
                    </div>

                    <div className="settings__input-block data">
                        <span className="input-text">ФИО</span>
                        <input type="text" className="settings__settings-input-data"/>
                    </div>

                    <div className="settings__input-block data">
                        <span className="input-text">Адрес проживания</span>
                        <input type="text" className="settings__settings-input-data"/>
                    </div>

                </div>

                <div className="settings__user-data">
                    <div className="settings__input-block">
                        <span className="input-text">Пароль</span>
                        <input type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block">
                        <span className="input-text">Повторите пароль</span>
                        <input type="text" className="settings-input"/>
                    </div>
                </div>
                    <button className="settings__save-btn">Сохранить</button>
                </form>
            </div>

        </div>
    );
};

export default Settings;