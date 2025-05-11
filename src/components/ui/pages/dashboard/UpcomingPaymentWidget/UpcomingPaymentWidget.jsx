import React from 'react';
import BaseWidget from "../BaseWidget/BaseWidget.jsx";

const UpcomingPaymentWidget = ({paymentTitle, dueDate, paymentAmount}) => {

    const addPaymentToTransactions = () => {
        console.log("add payment to transactions");
    }

    const title = "Upcoming payment";
    const content = (
        <>
            <p>{paymentTitle}</p>
            <p>{dueDate}</p>
            <p>{paymentAmount}</p>

            <button onClick={addPaymentToTransactions}>Mark as paid</button>
        </>
    );

    return (
        <>
           <BaseWidget title={title} content={content}/>
        </>
    );
}

export default UpcomingPaymentWidget;