import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";
import PersonalAccount from "./personalAccount/personalAccount";
import Store from "./store/store";
import Delivery from "./delivery/delivery";
import Calc from "./calc/calc";
import Contacts from "./contacts/contacts";
import Faq from "./faq/faq";
import Footer from "./footer/footer";

const Root = () => {
    return (
<BrowserRouter>
    <Route exact path='/' component={Header}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/' component={Store}/>
    <Route exact path='/' component={Delivery}/>
    <Route exact path='/' component={Calc}/>
    <Route exact path='/' component={Contacts}/>
    <Route exact path='/' component={() => <Faq title={'F.A.Q'}/>}/>
    <Route exact path='/' component={Footer}/>
    <Switch>
        <Route exact path='/personalAccount' component={PersonalAccount}/>
    </Switch>
</BrowserRouter>
    );
};

export default Root;