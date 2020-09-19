import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import * as filterActions from "../../store/filterReducer";
import createYearArray from "../../utils/createYearArray";
import Button from "../UI/Button";
import styles from "./styles.module.scss";

interface ToggleButtonProps {
  filterTitle: string;
}

const YearFilterButton: React.FC<ToggleButtonProps> = ({
  filterTitle,
}: ToggleButtonProps) => {
  const dispatch = useDispatch();

  const yearButton = useSelector(
    (state: RootStateOrAny) => state.filterButton.yearValue
  );

  const yearArray = createYearArray();

  const yearButtonClicked = (value: string) => {
    const yearBtn = yearButton;
    if (value === yearBtn) {
      value = null;
    }

    dispatch(filterActions.setYearValue(value));
  };

  return (
    <div className={styles.filter_container}>
      <h5>{filterTitle}</h5>
      <div className={styles.toggle_button_container}>
        {yearArray.map((year) => {
          return (
            <Button
              className={
                yearButton && yearButton === year ? styles.button_active : null
              }
              key={year}
              toggleValue={year}
              onClick={() => yearButtonClicked(year)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YearFilterButton;
