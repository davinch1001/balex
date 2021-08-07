import React from 'react';
import {Link} from "react-router-dom";

const PrevStore = () => {
    return (
        <div className='prev-store'>
            <div className="container">
                <div className="prev-store__store-items">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png" alt=""/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt=""/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Best_Buy_logo_2018.svg/1280px-Best_Buy_logo_2018.svg.png" alt=""/>
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/04/zappos-logo.png" alt=""/>
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png.png" alt=""/>
                </div>
                <Link to='store' className="prev-store__view-more">Все Магазины</Link>
            </div>
        </div>
    );
};

export default PrevStore;