import { useState } from "react";
import { Button, Typography } from "components";

const OrderItem = () => {
  const [count, setCount] = useState(1);

  const handleMinusBtn = () => {
    if (count == 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  const handlePlusBtn = () => {
    setCount(count + 1);
  };
  return (
    <div className="basket__card">
      <div>
        <div className="basket__card-header">
          <Typography Type="h4" text="Pishloqli lavash" />
          {/* <Button append={<CloseIcon />} className="basket__remove-icon" /> */}
        </div>
        <Typography
          Type="p"
          className="text"
          text="Standart, chili, ketchup lavash"
        />
      </div>

      <div className="basket__card-bottom">
        <p className="price">26 000 so’m</p>
        <div className="add-favourite">
          <Button
            onClick={handleMinusBtn}
            className="btn"
            design="secondary"
            text={"-"}
          />
          <span>{count}</span>
          <Button
            onClick={handlePlusBtn}
            className="btn"
            design="primary"
            text={"+"}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
