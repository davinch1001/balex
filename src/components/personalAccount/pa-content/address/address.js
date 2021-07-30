import React from 'react';

const Address = () => {
    return (
        <div className='address'>
             <h2 className="address__title">Ваш персональный Адрес</h2>
            <p className="address__subtitle">Это адреса складов в Америке, которые вам нужно указывать при оформлении покупок в американских интернет-магазинах</p>
            <form action="" className="address__form">
                <div className="address__city-name">
                    <p className="city-name" id='de'>Delawere(DE)</p>
                    <p className="city-name">New York(NY)</p>
                </div>
                <div className="address__user-name">

                    <div className="user-first-name">
                        <span className="name-text">First name</span>
                        <input type="text" className="address__input"/>
                    </div>

                    <div className="user-last-name">
                        <span className="name-text">Last name</span>
                        <input type="text" className="address__input"/>
                    </div>

                </div>
                <div className="address__street">

                    <div className="street-name">
                        <span className="name-text">Street</span>
                        <input type="text" className="address__input"/>
                    </div>

                    <div className="user-last-name">
                        <span className="name-text">Last name</span>
                        <input type="text" className="address__input"/>
                    </div>

                </div>
                <div className="address__user-name">

                    <div className="street-name">
                        <span className="name-text">City</span>
                        <input type="text" className="address__input"/>
                    </div>

                    <div className="user-last-name">
                        <span className="name-text">State</span>
                        <input type="text" className="address__input"/>
                    </div>

                </div>

                <div className="address__input-block">
                    <div className="bottom-inputs">
                        <span className="name-text">ZIP</span>
                        <input type="text" className="inputs zip"/>
                    </div>
                    <div className="bottom-inputs">
                        <span className="name-text">Country</span>
                        <input type="text" className="inputs country"/>
                    </div>
                    <div className="bottom-inputs">
                        <span className="name-text">Phone</span>
                        <input type="text" className="inputs phone"/>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Address;