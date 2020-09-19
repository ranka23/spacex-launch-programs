import React from "react";
import styles from "./styles.module.scss";

interface ToggleButtonProps {
  toggleValue: string | boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  buttonKey?: string;
  className?: string;
}

const Button: React.FC<ToggleButtonProps> = ({
  toggleValue,
  onClick,
  buttonKey = "",
  className = "",
}: ToggleButtonProps) => {
  return (
    <button
      key={buttonKey}
      type="button"
      onClick={onClick}
      className={`${styles.button_container} ${className}`}
    >
      {toggleValue.toString()}
    </button>
  );
};

Button.defaultProps = {
  buttonKey: "",
  className: "",
};

export default Button;
