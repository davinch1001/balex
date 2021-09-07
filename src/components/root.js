import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";
import PersonalAccount from "./personalAccount/personalAccount";
import Delivery from "./delivery/delivery";
import Calc from "./calc/calc";
import Contacts from "./contacts/contacts";
import Faq from "./faq/faq";
import Footer from "./footer/footer";
import PrevStore from "./store/prevStore";
import Store from "./store/store";
import Auth from "./auth/auth";

const Root = () => {
    const [activeModal, setActiveModal] = useState(false)
    const [activeModalSignIn, setActiveModalSignIn] = useState(false)
    return (
<BrowserRouter>
    <Route exact path='/' component={() => <Header activeSignIn={activeModalSignIn} setActiveSignIn={setActiveModalSignIn} activeModal={activeModal} setActiveModal={setActiveModal} />}/>
    <Route exact path='/' component={() => <Home activeSignIn={activeModalSignIn} setActiveSignIn={setActiveModalSignIn} activeModal={activeModal} setActiveModal={setActiveModal}/>}/>
    <Route exact path='/' component={PrevStore}/>
    <Route exact path='/' component={Delivery}/>
    <Route exact path='/' component={Calc}/>
    <Route exact path='/' component={Contacts}/>
    <Route exact path='/' component={() => <Faq title={'F.A.Q'}/>}/>
    <Route exact path='/' component={() => <Footer setActiveModal={setActiveModal}/>}/>
    <Switch>
        <Route exact path='/personalAccount' component={() => <PersonalAccount />}/>
        <Route exact path='/auth' component={() => <Auth />}/>
        <Route exact path='/store' component={() => <Store activeModal={activeModal} setActiveModal={setActiveModal} activeSignIn={activeModalSignIn} setActiveSignIn={setActiveModalSignIn()} />}/>
    </Switch>
</BrowserRouter>
    );
};

export default Root;