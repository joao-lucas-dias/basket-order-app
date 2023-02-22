import { QuantityInfo } from "@/models/product";
import classes from "./QuantitySelector.module.css";

const QuantitySelector: React.FC<{ quantityInfo: QuantityInfo }> = (props) => {
  return (
    <div className={classes.wrapper}>
      QTY
      <div className={classes.container}>
        <div className={classes.display}>
          <p>1.5</p>
          <p>/ unit</p>
        </div>
        <div className={classes.buttons}>
          <button className={classes.increment}>+</button>
          <button className={classes.decrement}>-</button>
        </div>
      </div>
    </div>
  )
};

export default QuantitySelector;