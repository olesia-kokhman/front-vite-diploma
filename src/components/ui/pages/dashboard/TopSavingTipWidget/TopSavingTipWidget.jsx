import React from 'react';
import BaseWidget from "../BaseWidget/BaseWidget.jsx";

const TopSavingTipWidget = () => {

    const title = "Top saving tip";
    const content = (
        <>
            <p>Transfer 10% of your income to savings every payday</p>
        </>
    )

    return (
        <>
            <BaseWidget title={title} content={content}/>
        </>
    );
}

export default TopSavingTipWidget;
