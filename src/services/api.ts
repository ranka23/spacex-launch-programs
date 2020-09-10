/* eslint-disable camelcase */

import axios from "axios";

export interface LaunchData {
  rocket: any;
  mission_id: string[];
  links: any;
  mission_name: string;
  flight_number: string;
  launch_year: string;
  launch_success: boolean;
  id: string;
}

interface LaunchDataList {
  data?: LaunchData[];
  error?: Error;
}

export const getLaunchList = async (url: string): Promise<LaunchDataList> => {
  try {
    const { data } = await axios.get(url);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const getFilterList = async (url: string): Promise<LaunchDataList> => {
  try {
    const { data } = await axios.get(url);
    return { data };
  } catch (error) {
    return { error };
  }
};
