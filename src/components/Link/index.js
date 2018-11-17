import React from 'react';

const Link = ({children, ...props}) => (
    <a {...props} rel="noopener noreferrer">
        {children}
    </a>
);

export default Link;
