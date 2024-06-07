import React from "react";

const ScrabbleSelection = ({ restaurant, onReveal, numbers }) => {
  return (
    <div className="scrabble-selection">
      <h1>Great choice! Let's reveal your surprise...</h1>
      <ul>
        {numbers.map((number, index) => (
          <li
            key={index}
            style={{ backgroundColor: index === restaurant ? "yellow" : "" }}
          >
            {number}
          </li>
        ))}
      </ul>
      <button onClick={() => onReveal(restaurant)}>Reveal</button>
    </div>
  );
};

export default ScrabbleSelection;
