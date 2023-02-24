import classes from "./BasketButton.module.css";

const BasketButton = () => {
  return (
    <button onClick={() => console.log("click")} className={classes.button} >
      My Basket
      {<span className={classes.badge}>{5}</span>}
    </button>
  )
};

export default BasketButton;