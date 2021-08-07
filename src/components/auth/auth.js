import React, {useState} from 'react';
import Registr from "./registr/registr";
import PostCode from "./postCode/postCode";
import DocInfo from "./docInfo/docInfo";

const Auth = ({activeModal, setActiveModal, activeSignIn}) => {

    const [stepsTabs, setStepsTabs] = useState(1)

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
                    <PostCode setActiveModal={setActiveModal} setActiveSignIn={activeSignIn}  getIndex={getIndex}  stepsTabs={stepsTabs}/>
                </div>

                <div className={stepsTabs === 3 ? 'auth__doc-info-block active' : 'auth__doc-info-block'}>
                    <DocInfo activeModal={activeModal} setActiveModal={setActiveModal} getIndex={getIndex}  stepsTabs={stepsTabs}/>
                </div>

            </div>

        </div>
    );
};

export default Auth;