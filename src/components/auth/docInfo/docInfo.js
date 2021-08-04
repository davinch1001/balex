import React from 'react';

const DocInfo = ({getIndex}) => {

    const returnStep2 = (e) => {
        e.preventDefault()
        getIndex(2)
    }
    return (
        <div className="doc">

            <form className='doc__form'>
                <input type="text" className="doc__input"/>
                <input type="text" className="doc__input"/>
                <input type="text" className="doc__input"/>
                <input type="text" className="doc__input"/>
                <div className="doc__btns">
                    <button onClick={returnStep2} className="doc__btn cancel">Назад</button>
                    <button className="doc__btn">Завершить</button>
                </div>

            </form>

        </div>

    );
};

export default DocInfo;