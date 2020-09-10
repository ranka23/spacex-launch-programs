import config from "../config";

export default (
  yearValue: string,
  launchValue: boolean,
  landingValue: boolean
): string => {
  let url = `${config.API_URL}?limit=100`;

  if (yearValue !== null && yearValue !== "") {
    url += `&launch_year=${yearValue}`;
  }

  if (launchValue !== null) {
    url += `&launch_success=${launchValue.toString()}`;
  }

  if (landingValue !== null) {
    url += `&land_success=${landingValue.toString()}`;
  }

  return url;
};
