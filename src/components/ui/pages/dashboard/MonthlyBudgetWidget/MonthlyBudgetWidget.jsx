import React from 'react';
import BaseWidget from "../BaseWidget/BaseWidget.jsx";

const MonthlyBudgetWidget = () => {

    const title = "Monthly budget"
    const content = (
        <>
            <p>Budget is all right</p>
        </>
    );

    return (
        <>
           <BaseWidget title={title} content={content}/>
        </>
    );
}

export default MonthlyBudgetWidget;