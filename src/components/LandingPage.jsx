import styles from "./LandingPage.module.css";
import diceImage from "../assets/images/dice.png";

const LandingPage = ({ setIsGameOn }) => {
  return (
    <div className={styles.container}>
      <img src={diceImage} alt="Dice Image" />
      <div className={styles.contentContainer}>
        <h1>DICE GAME</h1>
        <button onClick={() => setIsGameOn(true)}>Play Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
