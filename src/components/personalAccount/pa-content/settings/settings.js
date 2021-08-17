import React from 'react';
import {useDispatch} from "react-redux";
import {updateUser} from "../../../../redux/reducers/auth";

const Settings = () => {


    const user = JSON.parse(localStorage.getItem('userEmailPass'))
    const userData = JSON.parse(localStorage.getItem('auth'))
    console.log('========>',user.userEmail, user.userPass)

    const dispatch = useDispatch()
    const updateUserHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser(e.target.children[0].children[0].children[1].value,e.target.children[0].children[1].children[1].value,e.target.children[0].children[2].children[1].value,e.target.children[0].children[3].children[1].value,e.target.children[1].children[0].children[0].children[1].value,e.target.children[1].children[0].children[1].children[1].value,e.target.children[1].children[1].children[1].value, user.userEmail, user.userPass, userData.id))
        console.log()
    }

    return (
        <div className='settings'>
            <h2 className="settings__title">Настройки аккаунта</h2>
            <div className="settings__form">
                <form onSubmit={updateUserHandler} action="">
                <div className="settings__user-data">
                    <div className="settings__input-block">
                        <span className="input-text">Имя</span>
                        <input  type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block">
                        <span className="input-text">Фамилия</span>
                        <input type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block">
                        <span className="input-text">Телефон</span>
                        <input type="text" className="settings-input"/>
                    </div>
                    <div className="settings__input-block data">
                        <span className="input-text">Тип документа</span>
                        <input type="text" className="settings__settings-input-data"/>
                    </div>
                </div>

                <div className="settings__user-data data">

                    <div style={{display:'flex'}}>
                        <div className="settings__input-block data">
                            <span className="input-text">Номер документа</span>
                            <input type="text" className="settings__settings-input-data"/>
                        </div>
                        <div className="settings__input-block data">
                            <span className="input-text">Страна</span>
                            <input type="text" className="settings__settings-input-data"/>
                        </div>
                    </div>
                    <div className="settings__input-block data">
                        <span className="input-text">Адрес проживания</span>
                        <input type="text" className="settings__settings-input-data"/>
                    </div>
                </div>

                    <button type='submit' className="settings__save-btn">Сохранить</button>
                </form>
            </div>

        </div>
    );
};

export default Settings;