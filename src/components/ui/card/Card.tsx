/* eslint-disable react/require-default-props */
import React from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: JSX.Element[];
  itemId?: string | number | null | undefined;
}

const Card: React.FC<CardProps> = ({ children, itemId }: CardProps) => {
  return (
    <div key={itemId} className={styles.card_container}>
      {children}
    </div>
  );
};
export default Card;
