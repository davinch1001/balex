import React from 'react';

const StepBtn = ({stepsTabs}) => {
    return (
        <div>
            <div className="auth__steps-tabs">

                <button className={stepsTabs === 1 ? 'step-tab active' : 'step-tab' }>1 <span/> </button>
                <button className={stepsTabs === 2 ? 'step-tab active' : 'step-tab ' }>2 <span/></button>
                <button className={stepsTabs === 3 ? 'step-tab active' : 'step-tab tab3' }>3</button>

            </div>
        </div>
    );
};

export default StepBtn;