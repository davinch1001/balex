    import React from 'react';
import {useDispatch} from "react-redux";

import {postDocInfo} from "../../../redux/reducers/auth";
import StepBtn from "../stepBtn/stepBtn";
    import {useHistory} from "react-router";



const DocInfo = ({getIndex, stepsTabs, setActiveModal}) => {
    const histoty = useHistory()
    const dispatch = useDispatch()
    const postDocHadndler = (e) => {
        e.preventDefault()
        dispatch(postDocInfo(e.target.children[0].children[1].value,e.target.children[1].children[1].value, e.target.children[2].children[1].value, e.target.children[3].children[1].value))
        histoty.push('/personalAccount')
    }

    const returnStep2 = (e) => {
        e.preventDefault()
        getIndex(2)
    }

    return (
        <div className="doc">
            <h2 className="doc__title">Аккаунт</h2>
            <StepBtn stepsTabs={stepsTabs}/>
            <form onSubmit={postDocHadndler} className='doc__form'>
               <div className="doc__input-block">
                   <span className="input-text">Type</span>
                   <select required className='input select' name="" id="0">
                       <option value="PASSPORT">Паспорт</option>
                       <option value="ID_CARD">Карта</option>
                       <option value="DRIVERS_LICENSE">Водительское удостоверение</option>
                   </select>
               </div>

                <div className="doc__input-block">
                    <span className="input-text">Type</span>
                    <input required type="text" placeholder="Данные" className="doc__input"/>
                </div>

                <div className="doc__input-block">
                    <span className="input-text">Type</span>
                    <input required type="text" placeholder="Адрес" className="doc__input"/>
                </div>

                <div className="doc__input-block">
                    <span className="input-text">Type</span>
                    <select required className='select' name="" id="0">
                        <option value="KG">Кыргызстан</option>
                        <option value="KZ">Казахстан </option>
                        <option value="UZB">Узбекистан</option>
                        <option value="TGZ">Таджикистан</option>
                        <option value="UC">Украина</option>
                    </select>
                </div>

                <div className="doc__btns">
                    <button onClick={returnStep2} className="doc__btn cancel">Назад</button>
                    <button type='submit' className="doc__btn">Завершить</button>
                </div>

            </form>

        </div>

    );
};

export default DocInfo;