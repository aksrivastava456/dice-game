import { useState } from "react";
import styles from "./GamePlay.module.css";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [totalScore, setTotalScore] = useState(0);

  const [activeButton, setActiveButton] = useState("");

  const handleClick = (value) => {
    setActiveButton(value);
    setError("");
  };

  const [error, setError] = useState("");

  const [activeDice, setActiveDice] = useState(1);

  const handleDiceClick = (value) => {
    if (activeButton != "") {
      setActiveDice(value);
      const newScore =
        value === activeButton ? totalScore + 10 : totalScore - 2;
      setTotalScore(newScore);
    } else setError("You have not selected any number.");
  };

  const randomNumberGenerator = (min, max) =>
    Math.floor(min + Math.random() * (max - min));
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.scoreContainer}>
          <h1>{totalScore}</h1>
          <p>Total Score</p>
        </div>
        <NumberSelector
          error={error}
          setError={setError}
          activeButton={activeButton}
          handleClick={handleClick}
        />
      </div>
      <RollDice
        activeDice={activeDice}
        handleDiceClick={handleDiceClick}
        randomNumberGenerator={randomNumberGenerator}
        setTotalScore={setTotalScore}
      />
    </>
  );
};

export default GamePlay;
