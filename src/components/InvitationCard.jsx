import React, { useRef } from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

const InvitationCard = ({ restaurant }) => {
  const cardRef = useRef();
  const restaurants = [
    "The Keg Steakhouse",
    "529 Wellington",
    "Chop Steakhouse & Bar",
    "Hy's Steakhouse",
  ];

  const downloadCard = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          saveAs(dataUrl, "invitation.png");
        })
        .catch((err) => {
          console.error("Could not generate image", err);
        });
    }
  };

  return (
    <div>
      <div ref={cardRef} className="invitation-card">
        <h1>Congratulations, Damilola!</h1>
        <p>You've graduated with a BSc in Nursing from Brandon University!</p>
        <p>
          To celebrate this special occasion, you're invited to dinner at{" "}
          {restaurants[restaurant]}.
        </p>
        <p>Date: Tomorrow, Friday</p>
        <p>Time: 8 PM</p>
        <p>From: Francis Alagbe</p>
        <p>
          We can't wait to celebrate this milestone with you. Get ready for a
          night of fun and good food!
        </p>
        <div className="flowers">
          <div className="flower" />
          <div className="flower" />
          <div className="flower" />
        </div>
      </div>
      <button onClick={downloadCard}>Download Invitation Card</button>
    </div>
  );
};

export default InvitationCard;
