import styles from './Rules.module.css'

const Rules = ({setShowRules}) => {
    return (
        <div className={styles.container}>
            <h3>How to play dice game</h3>
            <div className={styles.paras}>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on  dice  if selected number is equal to dice number you will get 10 points if you get wrong guess then 2 point will be dedcuted </p>
            </div>
            <div className={styles.button}>
                <button onClick={() => {setShowRules(false)}}>Hide Rules</button>
            </div>
        </div>
    )
}

export default Rules;