import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map((item, i) => {
        return (
            <div key={i}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </div>
        )
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
}

export default Accordion;