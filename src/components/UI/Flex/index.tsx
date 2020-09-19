import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface FlexProps {
  className?: string;
  children: ReactNode;
}

const Flex: React.FC<FlexProps> = ({ children, className }: FlexProps) => {
  return (
    <div data-test="flex" className={`${styles.Flex} ${className}`}>
      {children}
    </div>
  );
};

Flex.defaultProps = {
  className: "",
};

export default Flex;
