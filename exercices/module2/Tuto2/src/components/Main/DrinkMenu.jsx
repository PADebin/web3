// eslint-disable-next-line no-unused-vars
import { ReactElement } from "react";

const DrinkMenu = ({ title, children }) => {
  return (
    <div className="drink-menu">
      <h4>{title}</h4>
      <div className="drink-items">{children}</div>
    </div>
  );
};

export default DrinkMenu;
