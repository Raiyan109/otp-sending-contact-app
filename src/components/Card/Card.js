import React from 'react';

const Card = ({ contact }) => {

    const { name, phone } = contact
    return (
        <div>
            <p>{name}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Card;