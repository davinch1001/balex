import React from 'react';

const StepBtn = ({stepsTabs}) => {
    return (
        <div>
            <div className="auth__steps-tabs">

                <button className={stepsTabs === 1 ? 'step-tab active' : 'step-tab' }>1</button>
                <button className={stepsTabs === 2 ? 'step-tab active' : 'step-tab' }>2</button>
                <button className={stepsTabs === 3 ? 'step-tab active' : 'step-tab' }>3</button>

            </div>
        </div>
    );
};

export default StepBtn;