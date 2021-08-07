import React, {useState} from 'react';
import storeCatalogs from '../../store-catalog.json'

const Store = () => {

    const [storeTabs, setStoreTabs] = useState(1)

    const storeCatalog = Object.values(storeCatalogs).map(el => el)
    console.log(storeCatalog)

    const category = ['Автозапчасти','Для будущих мам', 'Игрушки', 'Для детей','Для будущих мам', 'Автозапчасти', 'Игрушки', 'Для детей']
    return (
        <div className='store'>
            <div className="store__tabs">
                {
                    category.map((el, idx) => (
                            <button onClick={() => setStoreTabs(idx+1)} className='store__tabs-btn' key={idx}>{el}</button>
                    ))
                }
            </div>

            <div className="store__tabs-content">
               <div className={storeTabs === 1 ? ' store__auto-parts active' : 'store__auto-parts'}>
                   {
                    storeCatalog[0].map((el, idx) => (
                        <div key={idx} className='store__store-catalog-auto'>
                            <a href={el.storeLink}>{el.storeName}</a>
                        </div>
                    ))
                   }
               </div>

                <div className={storeTabs === 2 ? ' store__for-moms active' : 'store__for-moms'}>
                    {
                        storeCatalog[1].map((el, idx) => (
                            <div key={idx} className='store__store-catalog-auto'>
                                <a href={el.storeLink}>{el.storeName}</a>
                            </div>
                        ))
                    }
                </div>

                <div className={storeTabs === 3 ? ' store__kids active' : 'store__kids'}>
                    {
                        storeCatalog[2].map((el, idx) => (
                            <div key={idx} className='store__store-catalog-auto'>
                                <a href={el.storeLink}>{el.storeName}</a>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default Store;