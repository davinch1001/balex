import React, {useState} from 'react';
import Registr from "./registr/registr";
import PostCode from "./postCode/postCode";
import DocInfo from "./docInfo/docInfo";

const Auth = () => {

    const [stepsTabs, setStepsTabs] = useState(1)
    console.log(stepsTabs, 'step')

    const getIndex = (idx) => {
        setStepsTabs(idx)
    }

    return (
        <div className='auth'>

            <div className="auth__tabs-content">

                <div className={stepsTabs === 1 ? 'auth__registr-block active' : 'auth__registr-block'}>
                    <Registr getIndex={getIndex} stepsTabs={stepsTabs}/>
                </div>

                <div className={stepsTabs === 2 ? 'auth__post-code-block active' : 'auth__post-code-block'}>
                    <PostCode getIndex={getIndex}  stepsTabs={stepsTabs}/>
                </div>

                <div className={stepsTabs === 3 ? 'auth__doc-info-block active' : 'auth__doc-info-block'}>
                    <DocInfo getIndex={getIndex}  stepsTabs={stepsTabs}/>
                </div>

            </div>

        </div>
    );
};

export default Auth;