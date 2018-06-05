import React from 'react';

const RoundedButton = ({ iconName, onClickIcon, iconClassName }) => {
    return (
        <div className={`rounded-circle ${iconClassName}`} onClick={onClickIcon}>
            <i className={`fa fa-${iconName}`}></i>
        </div>
    )
}

export default RoundedButton;