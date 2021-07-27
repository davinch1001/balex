import React from 'react';
import PersAccHeader from "./persAccComponents/persAccHeader/persAccHeader";
import Menu from "./persAccComponents/menu/menu";
import Scene from "./persAccComponents/Scene/Scene";
import PersAccFooter from "./persAccComponents/persAccFooter/persAccFooter";

const PersonalAccount = () => {
    return (
        <div className='personal-account'>
            <PersAccHeader/>
            <div className='content'>
                <Menu/>
                <Scene/>
            </div>
            <PersAccFooter/>
        </div>
    );
};

export default PersonalAccount;