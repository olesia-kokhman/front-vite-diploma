import React from 'react';

const BaseWidget = ({title, content}) => {

    return (
        <>
            <div className="widget">
                <div className="widget-header">
                    <h4 className="widget-title">{title}</h4>
                </div>
                <div className="widget-body">
                    {content}
                </div>

            </div>
        </>
    );
}

export default BaseWidget;