import React from 'react';

const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="contacts__title">Контакты</h2>
            <div className="container">
                <div className="contacts__block">
                    <div className="contacts__social-network">
                        <div className="social-network-title">Следи за нами в instagram</div>
                        <a href="#" className="social-network-link">@betrex</a>
                        <p className="social-network-abouts">В Instagram мы рассказываем, как и где покупать в
                            США, информируем о сезонных и незапланированных распродажах в магазинах, скидываем
                            выгодные лоты, а также делимся другим полезным контентом.</p>
                    </div>
                    <div className="contacts__numbers">
                        <h2 className="numbers-title">Свяжитесь с нами по телефону</h2>
                            <p className="number">+996 (555) 555-555</p>
                            <p className="number">+996 (555) 555-555</p>
                            <span className="abouts">24/7 тех. поддержка и бла бла бла бал бала б</span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;