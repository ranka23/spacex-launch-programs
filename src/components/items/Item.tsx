import React from "react";
import Card from "../ui/card/Card";
import styles from "./item.module.scss";
import ItemValue from "./item_value/ItemValue";

interface ItemsProps {
  // eslint-disable-next-line react/require-default-props
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
export default Item;
