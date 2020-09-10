import React from "react";
import Flex from "../../ui/flex/Flex";
import styles from "./itemvalue.module.scss";

interface ItemValueProps {
  title: string;
  value: string | boolean | Array<string>;
}

const ItemValue: React.FC<ItemValueProps> = ({
  title = "",
  value = "",
}: ItemValueProps) => {
  const ascertainValue = () => {
    if (typeof value === "boolean") {
      return <span className={styles.value}>{value.toString()}</span>;
    }
    if (typeof value === "string") {
      return <span className={styles.value}>{value}</span>;
    }
    if (value === null) {
      value = "Not Found";
      return <span className={styles.value}>{value}</span>;
    }
    return (
      <ul className={styles.list_value}>
        {value.map((v) => (
          <li key={v} className={styles.value}>
            {v}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Flex className={styles.value_container}>
      <p className={styles.value_title}>{title}:</p>
      {ascertainValue()}
    </Flex>
  );
};
export default ItemValue;
