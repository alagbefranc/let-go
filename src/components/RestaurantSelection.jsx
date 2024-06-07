import React from 'react';

const numbers = ["1", "2", "3", "4"];

const RestaurantSelection = ({ onSelect }) => {
    return (
        <div className="restaurant-selection">
            <h1>Behind these numbers are restaurants in Winnipeg. Pick one!</h1>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index} onClick={() => onSelect(index)}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantSelection;
