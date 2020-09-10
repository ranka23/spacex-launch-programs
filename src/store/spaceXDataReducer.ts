import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppThunk, AppState } from ".";
import { LaunchData, getLaunchList, getFilterList } from "../services/api";
import getUrl from "../utils/getUrl";

interface SpaceXData {
  readyStatus: string;
  items: LaunchData[];
  error: string | null;
}

export const initialState: SpaceXData = {
  readyStatus: "invalid",
  items: [],
  error: null,
};

const spaceXList = createSlice({
  name: "launchDataList",
  initialState,
  reducers: {
    getRequest: (state: SpaceXData) => {
      state.readyStatus = "request";
    },
    getSuccess: (state, { payload }: PayloadAction<LaunchData[]>) => {
      state.readyStatus = "success";
      state.items = payload;
    },
    getFailure: (state, { payload }: PayloadAction<string>) => {
      state.readyStatus = "failure";
      state.error = payload;
    },
    getFilteredList: (state, { payload }: PayloadAction<LaunchData[]>) => {
      state.readyStatus = "request";
      state.items = payload;
    },
  },
});

export default spaceXList.reducer;
export const {
  getRequest,
  getSuccess,
  getFailure,
  getFilteredList,
} = spaceXList.actions;

export const fetchSpaceXList = (): AppThunk => async (dispatch, getState) => {
  const { launchValue } = getState().filterButton;
  const { landingValue } = getState().filterButton;
  const { yearValue } = getState().filterButton;

  const url = getUrl(yearValue, launchValue, landingValue);


  dispatch(getRequest());

  const { error, data } = await getLaunchList(url);

  if (error) {
    dispatch(getFailure(error.message));
  } else {
    dispatch(getSuccess(data as LaunchData[]));
  }
};

const shouldFetchLaunchList = (state: AppState) =>
  state.spaceXList.readyStatus !== "success";

export const fetchSpaceXListIfNeed = (): AppThunk => (dispatch, getState) => {
  if (shouldFetchLaunchList(getState())) return dispatch(fetchSpaceXList());

  return null;
};

export const fetchFilteredList = (): AppThunk => async (dispatch, getState) => {
  const { launchValue } = getState().filterButton;
  const { landingValue } = getState().filterButton;
  const { yearValue } = getState().filterButton;

  const url = getUrl(yearValue, launchValue, landingValue);
  dispatch(getRequest());

  const { error, data } = await getFilterList(url);

  if (error) {
    dispatch(getFailure(error.message));
  } else {
    dispatch(getSuccess(data as LaunchData[]));
  }
};
