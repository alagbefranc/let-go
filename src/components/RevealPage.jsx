import React from "react";

const RevealPage = ({ restaurant, onConfirm }) => {
  const restaurants = [
    "The Keg Steakhouse",
    "529 Wellington",
    "Chop Steakhouse & Bar",
    "Hy's Steakhouse",
  ];
  return (
    <div className="reveal-page">
      <h1>Get ready for an amazing dinner at {restaurants[restaurant]}!</h1>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default RevealPage;
