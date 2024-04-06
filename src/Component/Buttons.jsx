import styles from "./Buttons.module.css";

const Button = ({ onButtonClick }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
    "-",
    "C",
  ];

  // const buttonClick = (item) => {
  //   return console.log(item);
  //   onClick(item);
  // };

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((buttonName) => (
        <button
        key={buttonName}
          className={styles.containerButtons}
          onClick={()=>onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Button;
