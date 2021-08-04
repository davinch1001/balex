import axios from 'axios';
import auth from './auth'

const initState = {

}

const hasher = (email, password) => {
    let token = email + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    let hash = btoa(token);

    return "Basic " + hash;
}




export const logout = () => {

}