import config from "../config";
import isEmpty from "./isEmpty";

export default (
  yearValue?: string,
  launchValue?: boolean,
  landingValue?: boolean
): string => {
  let url = `${config.API_URL}?limit=100`;

  if (!isEmpty(yearValue)) {
    url += `&launch_year=${yearValue}`;
  }

  if (!isEmpty(launchValue)) {
    url += `&launch_success=${launchValue.toString()}`;
  }

  if (!isEmpty(landingValue)) {
    url += `&land_success=${landingValue.toString()}`;
  }

  return url;
};
