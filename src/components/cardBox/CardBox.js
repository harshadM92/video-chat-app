import React from 'react';
import { PropTypes } from 'prop-types';

const CardBox = ({ children, className }) => {
    return (
        <div className={`card-box border border-primary rounded ${className}`}>
            {children}
        </div>
    );
};
CardBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    className: PropTypes.string,
};
export default CardBox;
