/* eslint-disable react/require-default-props */
import React from "react";
import styles from "./flex.module.scss";

interface FlexProps {
  className?: string;
  children: JSX.Element[];
}

const Flex: React.FC<FlexProps> = ({ children, className }: FlexProps) => {
  return <div className={`${styles.flex} ${className}`}>{children}</div>;
};
export default Flex;
