import React, { memo, useEffect } from "react";
import { Helmet } from "react-helmet";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Item from "../../components/Items";
import Sidebar from "../../components/Sidebar";
import { AppState } from "../../store";
import { fetchSpaceXListIfNeed } from "../../store/spaceXData";
import styles from "./styles.module.scss";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items } = useSelector(
    ({ spaceXList }: AppState) => spaceXList,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchSpaceXListIfNeed());
  }, [dispatch]);

  const renderList = () => {
    if (!readyStatus || readyStatus === "invalid" || readyStatus === "request")
      return <p>Loading...</p>;

    if (readyStatus === "failure") return <p>Failed to load SpaceX data.</p>;

    return items.map((item) => {
      let landing;

      if (item.launch_success === false) {
        landing = false;
      }

      landing = item.rocket.first_stage.cores[0].land_success;

      if (landing === null) {
        landing = false;
      }

      return (
        <div className={styles.list_items} key={item.flight_number}>
          <Item
            missionImage={item.links.mission_patch_small}
            missionName={item.mission_name}
            flightNumber={item.flight_number}
            missionId={item.mission_id}
            launchYear={item.launch_year}
            successfulLaunch={item.launch_success}
            successfulLanding={landing}
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.home}>
      <Helmet title="Home" />
      <div className={styles.content_container}>
        <Sidebar />
        <div className={styles.list_items_container}>{renderList()}</div>
      </div>
    </div>
  );
};

export default memo(Home);
