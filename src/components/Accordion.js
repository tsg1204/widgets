import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, i) => {
        const active = i === activeIndex ? 'active' : '';

        return (
            <div key={i}>
                <div 
                    className={`title ${active}`}
                    onClick={() => handleTitleClick(i)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
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