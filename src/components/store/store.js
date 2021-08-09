import React, {useState} from 'react';
import storeCatalogs from '../../store-catalog.json'
import {Link} from "react-router-dom";

const Store = () => {

    const [storeTabs, setStoreTabs] = useState(1)

    const storeCatalog = Object.values(storeCatalogs).map(el => el)
    console.log(storeCatalog)

    const category = ['Автозапчасти','Для будущих мам', 'Для детей', 'Аксесуары','Игрушки', 'Обувь', 'Для экстримального спорта', 'Женское белье']
    return (
        <div className='store'>
            <Link className="go-back" to='/'>Вернуться на главную</Link>
            <div className="container">
            <div className="store__tabs">
                {
                    category.map((el, idx) => (
                            <button onClick={() => setStoreTabs(idx+1)} className='store__tabs-btn' key={idx}>{el}</button>
                    ))
                }
            </div>

            <div className="store__tabs-content">
               <div className={storeTabs === 1 ? ' store__auto-parts active' : 'store__auto-parts'}>
                   <div className='store__block'>
                   {
                    storeCatalog[0].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <a target='_blank' rel='noreferrer' href={el.storeLink} className="store-name">{el.storeName}</a>
                        </div>
                    ))
                   }
                   </div>
               </div>

                <div className={storeTabs === 2 ? ' store__for-moms active' : 'store__for-moms'}>
                    <div className='store__block'>
                    {
                        storeCatalog[1].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <span className="store-name">{el.storeName}</span>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div className={storeTabs === 3 ? ' store__kids active' : 'store__kids'}>
                    <div className='store__block'>
                    {
                        storeCatalog[2].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <span className="store-name">{el.storeName}</span>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div className={storeTabs === 4 ? ' store__accessories active' : 'store__accessories'}>
                    <div className='store__block'>
                    {
                        storeCatalog[3].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <span className="store-name">{el.storeName}</span>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div className={storeTabs === 5 ? ' store__toys active' : 'store__toys'}>
                    <div className='store__block'>
                    {
                        storeCatalog[4].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <span className="store-name">{el.storeName}</span>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div className={storeTabs === 6 ? ' store__shoes active' : 'store__shoes'}>
                    <div className='store__block'>
                    {
                        storeCatalog[5].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <span className="store-name">{el.storeName}</span>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div className={storeTabs === 7 ? ' store__extreme-sport active' : 'store__extreme-sport'}>
                    <div className='store__block'>
                    {
                        storeCatalog[6].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/>
                                </a>
                                <a href={el.storeLink} className="store-name">{el.storeName}</a>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div className={storeTabs === 8 ? ' store__lingerie active' : 'store__lingerie'}>
                    <div className='store__block'>
                    {
                        storeCatalog[7].map((el, idx) => (
                            <div key={idx} className='store__store-catalog'>
                                <a href={el.storeLink}>
                                    <img className='store__img' src={el.storeImg} alt="img"/></a>
                                <span className="store-name">{el.storeName}</span>
                            </div>
                        ))
                    }
                </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Store;