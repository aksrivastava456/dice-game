import styles from "./NumberSelector.module.css";

const NumberSelector = ({ error, activeButton, handleClick }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.numberSelector}>
      <p className={styles.error}>{error}</p>
      <div className={styles.numbers}>
        {arr.map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(value)}
            className={value === activeButton ? styles.active : ""}
          >
            {value}
          </button>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
