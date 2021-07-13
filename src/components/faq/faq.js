import React from 'react';
import moreBtn from '../../../src/img/faq/more-btn.png'
import {logDOM} from "@testing-library/react";

const Faq = () => {
    const questions = [{
        question: 'Как оформить заказ на доставку?',
        answer: 'Войдите в личный кабинет и зарегайся и тд и тд и тд'
    }, {
        question: 'Сколько времени занимает доставка?',
        answer: 'В течени 7 дней'
    }, {
        question: 'Как мне оплатить товар?',
        answer: 'Деньгами'
    }, {
        question: 'В каких магазинах США можно делать покупки?',
        answer: 'В любых'
    }, {question: 'Как расчитать стоимость доставки?', answer: 'С кайфом'},
        {question: 'Как расчитать стоимость доставки?', answer: 'С кайфом'},
        {question: 'Как расчитать стоимость доставки?', answer: 'С кайфом'},
        {question: 'Как расчитать стоимость доставки?', answer: 'С кайфом'},
        {question: 'Как расчитать стоимость доставки?', answer: 'С кайфом'}]

    const showAnswer = (e) => {
        Array.from(document.getElementsByClassName('more-btn-img')).map((el, idx) => {
            return +e.target.id === idx ? el.classList.toggle('rotate') : el
        })
        Array.from(document.getElementsByClassName('answer')).map((a, aIdx) => {
            return +e.target.id === aIdx ? a.classList.toggle('active') : a
        })
    }

    return (
        <section className="faq">
            <h2 className="faq__title">F.A.Q</h2>
            <div className="container">
                <div className="faq__questions">
                    {questions.map((el, idx) => (
                        <div className='question-block'>
                            <div className='question' id={idx} onClick={showAnswer}>{el.question} <img
                                className='more-btn-img' src={moreBtn} alt=""/>
                            </div>
                            <p className='answer'>{el.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;