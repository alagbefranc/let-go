import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import ReactPlayer from "react-player";

const LandingPage = ({ onNext }) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="landing-page">
      <h1>Congratulations, Damilola Oladiran!</h1>
      <p>
        You've graduated with a BSc in Nursing from Brandon University! I'm so
        proud of you and all your hard work. You deserve all the happiness and
        success in the world!
      </p>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=SC4xMk98Pdc"
        playing
        loop
        volume={0.5}
        width="0"
        height="0"
      />
      <button onClick={onNext}>Click here to continue</button>
      <div className="fireworks"></div>
    </div>
  );
};

export default LandingPage;
