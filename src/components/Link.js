import React from 'react';

const Link = ({ href, className, children }) => {
    const handleOnClick = (event) => {
        event.preventDefault();

        window.history.pushState({}, '', href);
        
    }

    return (
        <a onClick={handleOnClick} href={href} className={className}>
            {children}
        </a>
    )
}

export default Link;