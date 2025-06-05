import React from "react";
import style from "./card.module.css";

type CardProps = {
  title?: string;
  subTitle?: string;
};

export const Card: React.FC<CardProps> = ({ title, subTitle }) => {
  return (
    <div className={style.card}>
      <div className={style.card_body}>
        <h2 className={style.card_title}>{title}</h2>
        <p className={style.card_subTitle}>{subTitle}</p>
        {/* <button className={style.card_button}>Add to Cart</button> */}
      </div>
    </div>
  );
};
