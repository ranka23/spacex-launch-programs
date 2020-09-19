/* eslint-disable react/require-default-props */
import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface CardProps {
  children: ReactNode;
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
