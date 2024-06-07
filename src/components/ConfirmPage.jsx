import React from "react";

const ConfirmPage = ({ onBack }) => {
  return (
    <div className="confirm-page">
      <h1>Are you sure you want to miss these goodies?</h1>
      <button onClick={onBack}>Go back</button>
    </div>
  );
};

export default ConfirmPage;
