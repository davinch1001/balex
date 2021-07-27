import React from 'react';
// import {Switch, Route, BrowserRouter} from "react-router-dom";
import Help from "../help/help";
import Packages from "../packages/packages";
import EmptyPackages from "../packages/emptyPackages";

const Scene = () => {
    return (
        <div className='scene'>
            <EmptyPackages/>
        </div>
    );
};

export default Scene;