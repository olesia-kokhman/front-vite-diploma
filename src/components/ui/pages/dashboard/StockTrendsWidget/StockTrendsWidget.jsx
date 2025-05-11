import React from 'react';
import BaseWidget from "../BaseWidget/BaseWidget.jsx";

const StockTrendsWidget = () => {

    const stocks = [
        { name: "Amazon", price: "171,00 USD", change: -4.15 },
        { name: "Samsung Electronics Co Ltd", price: "56100 KRW", change: 2.60 },
        { name: "Nvidia", price: "94,31 USD", change: -7.36 }
    ];

    const title = "Stock trends";
    const content = (
        <>
            {stocks.map((stock, index) => {
                return (
                    <div key={index}>
                        <div>
                            <p>{stock.name}</p>
                            <p>{stock.price}</p>
                        </div>
                        <div>
                            <p>{stock.change}</p>
                        </div>
                    </div>
                );
            })
            }
        </>
    );

    return (
        <>
            <BaseWidget title={title} content={content}/>
        </>
    );
}

export default StockTrendsWidget;