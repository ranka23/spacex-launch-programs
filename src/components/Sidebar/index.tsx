import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import * as filterActions from "../../store/filterReducer";
import Button from "../UI/Button";
import styles from "./styles.module.scss";
import YearFilterButton from "./YearFilterButton";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  const launchButton = useSelector(
    (state: RootStateOrAny) => state.filterButton.launchValue
  );

  const landingButton = useSelector(
    (state: RootStateOrAny) => state.filterButton.landingValue
  );

  const launchButtonClicked = (value: boolean) => {
    const launchBtn = launchButton;
    if (value === launchBtn) {
      value = null;
    }

    dispatch(filterActions.setLaunchValue(value));
  };

  const landingButtonClicked = (value: boolean) => {
    const landingBtn = landingButton;
    if (value === landingBtn) {
      value = null;
    }

    dispatch(filterActions.setLandingValue(value));
  };

  return (
    <div className={styles.sidebar_container}>
      <h4 className={styles.filter_title}>Filters</h4>
      <YearFilterButton filterTitle="Launch Year" />
      <div className={styles.filter_container}>
        <h5>Successful Launch</h5>
        <div className={styles.toggle_button_container}>
          <Button
            className={
              launchButton && launchButton !== null
                ? styles.button_active
                : null
            }
            onClick={() => launchButtonClicked(true)}
            toggleValue
          />
          <Button
            className={
              !launchButton && launchButton !== null
                ? styles.button_active
                : null
            }
            onClick={() => launchButtonClicked(false)}
            toggleValue={false}
          />
        </div>
      </div>
      <h5>Successful Landing</h5>
      <div className={styles.toggle_button_container}>
        <Button
          className={
            landingButton && landingButton !== null
              ? styles.button_active
              : null
          }
          onClick={() => landingButtonClicked(true)}
          toggleValue
        />
        <Button
          className={
            !landingButton && landingButton !== null
              ? styles.button_active
              : null
          }
          onClick={() => landingButtonClicked(false)}
          toggleValue={false}
        />
      </div>
    </div>
  );
};

export default Sidebar;
