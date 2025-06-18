import { useState } from "react";
import styles from "./RollDice.module.css";
import Rules from "./Rules";
import dice1 from "../assets/images/dices/dice_1.png";
import dice2 from "../assets/images/dices/dice_2.png";
import dice3 from "../assets/images/dices/dice_3.png";
import dice4 from "../assets/images/dices/dice_4.png";
import dice5 from "../assets/images/dices/dice_5.png";
import dice6 from "../assets/images/dices/dice_6.png";

const RollDice = ({
  activeDice,
  handleDiceClick,
  randomNumberGenerator,
  setTotalScore,
}) => {
  const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];
  const [showRules, setShowRules] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.dice}>
        <img
          src={diceImages[activeDice]}
          alt={`Dice ${activeDice}`}
          onClick={() => handleDiceClick(randomNumberGenerator(1, 7))}
        />
        <p>Click on Dice to roll</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setTotalScore(0);
          }}
        >
          Reset Score
        </button>
        <button
          className={styles.showRulesButton}
          onClick={() => setShowRules(true)}
        >
          Show Rules
        </button>
      </div>
      {showRules && <Rules setShowRules={setShowRules} />}
    </div>
  );
};

export default RollDice;
