import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";
import styles from "./styles.module.scss";
import ItemValue from "./item_value";

interface ItemsProps {
  id?: string;
  missionId: string[];
  missionName: string;
  flightNumber: string;
  missionImage: string;
  launchYear: string;
  successfulLaunch: boolean;
  successfulLanding: boolean;
}

const Item: React.FC<ItemsProps> = ({
  id,
  missionId,
  missionName,
  missionImage,
  launchYear,
  successfulLaunch,
  successfulLanding,
  flightNumber,
}: ItemsProps) => {
  return (
    <Card itemId={id}>
      <img
        className={styles.item_image}
        src={missionImage}
        alt="spaceX Mission Badge"
      />
      <h4 className={styles.item_name}>
        {missionName} #{flightNumber}
      </h4>
      <ItemValue title="Mission id" value={missionId} />
      <ItemValue title="Launch Year" value={launchYear} />
      <ItemValue title="Successful Launch" value={successfulLaunch} />
      <ItemValue
        title="Successful Landing"
        value={!successfulLaunch ? false : successfulLanding}
      />
    </Card>
  );
};

Item.defaultProps = {
  id: uuidv4(),
};

export default Item;
