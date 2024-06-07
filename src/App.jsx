import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import RestaurantSelection from "./components/RestaurantSelection";
import ScrabbleSelection from "./components/ScrabbleSelection";
import RevealPage from "./components/RevealPage";
import InvitationCard from "./components/InvitationCard";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(0);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const numbers = ["1", "2", "3", "4"];

  const nextStep = () => setStep(step + 1);
  const selectRestaurant = (index) => {
    setSelectedRestaurant(index);
    nextStep();
  };
  const revealRestaurant = () => nextStep();
  const confirmDate = () => nextStep();

  return (
    <div className="App">
      {step === 0 && <LandingPage onNext={nextStep} />}
      {step === 1 && <QuestionPage onNext={nextStep} />}
      {step === 2 && <RestaurantSelection onSelect={selectRestaurant} />}
      {step === 3 && (
        <ScrabbleSelection
          restaurant={selectedRestaurant}
          onReveal={revealRestaurant}
          numbers={numbers}
        />
      )}
      {step === 4 && (
        <RevealPage restaurant={selectedRestaurant} onConfirm={confirmDate} />
      )}
      {step === 5 && <InvitationCard restaurant={selectedRestaurant} />}
    </div>
  );
};

export default App;
