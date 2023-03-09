import { Typography } from "components";

const OrderCheckout = () => {
  return (
    <div className="basket__card">
      <ul className="basket__list">
        <li className="basket__list-item">
          <Typography Type="p" text="Buyurtma miqdori:" />
          <Typography Type="h4" text="84 000 so'm" />
        </li>
        <li className="basket__list-item">
          <Typography Type="p" text="Soliq:" />
          <Typography Type="h4" text="4 000 so'm" />
        </li>
        <li className="basket__list-item">
          <Typography Type="p" text="Yetkazib berish:" />
          <Typography Type="h4" text="14 000 so'm" />
        </li>
        <li className="basket__list-item total-summ">
          <Typography Type="p" text="Umumiy summa:" />
          <Typography Type="h4" text="110 000 so'm" />
        </li>
      </ul>
    </div>
  );
};

export default OrderCheckout;
