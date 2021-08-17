const hash = (email, password) => {
    let token = email + ":"  + password;
    let hash = btoa(token);
    return `Basic ${hash}`;
}

export default hash