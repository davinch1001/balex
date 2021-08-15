import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import logoHeader from '../../../img/header/logo-header-2.png'


import account from '../../../img/header/account.png'

const StoreHeader = ({setActiveSignIn, setActiveModal, activeSignIn,activeModal}) => {
    const userSignIn = useSelector(s => s.auth.status)

    return (
        <header className='store-header'>
            <div className="container">
                <div className="store-header__nav">
                    <Link to='/' className="store-header__go-home"><img src={logoHeader} height='60px' alt=""/> </Link>
                    <input className="store-header__search"/>
                    {userSignIn === 'signed-in' ? <div style={{display:"flex", alignItems: "center"}}> <img src={account} alt=""/><Link className='personal-account-text' style={{color:'white'}} to='/personalAccount'> Личный кабинет</Link></div> :
                        <div>
                            <button className='store-header__auth-btn' onClick={() => setActiveSignIn(!activeSignIn)}>Войти </button>
                            <button className='store-header__auth-btn' onClick={() => setActiveModal(!activeModal)}>Регистрация</button>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default StoreHeader;