import styles from "./Result.module.css";

const Result = ({inputValue}) => {
  return (
    <div className={styles.resultInput}>
      <input type="text" value={inputValue} className={styles.input} readOnly/>
    </div>
  );
};

export default Result;
