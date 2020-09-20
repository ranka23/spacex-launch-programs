import { fetchFilteredList } from "./spaceXData";
import { AppThunk } from ".";

interface FilterState {
  yearValue: string;
  launchValue: boolean | null;
  landingValue: boolean | null;
}

interface yearClickedAction {
  type: "YEAR_CLICKED";
  value: string;
}

interface launchClickedAction {
  type: "LAUNCH_CLICKED";
  value: boolean;
}

interface landingClickedAction {
  type: "LANDING_CLICKED";
  value: boolean;
}

type FilterActions =
  | yearClickedAction
  | launchClickedAction
  | landingClickedAction;

const initialState: FilterState = {
  yearValue: "",
  landingValue: null,
  launchValue: null,
};

export default (state = initialState, action: FilterActions): FilterState => {
  switch (action.type) {
    case "YEAR_CLICKED":
      return {
        ...state,
        yearValue: action.value,
      };
    case "LAUNCH_CLICKED":
      return {
        ...state,
        launchValue: action.value,
      };
    case "LANDING_CLICKED":
      return {
        ...state,
        landingValue: action.value,
      };
    default:
      return state;
  }
};

/*  
    These actions ascertain the values clicked in the Filters Sidebar
    and also make calls to api as per the values received.
*/
export const setYearValue = (value: string): AppThunk => {
  return async (dispatch) => {
    dispatch({ type: "YEAR_CLICKED", value });
    dispatch(fetchFilteredList());
  };
};

export const setLaunchValue = (value: boolean): AppThunk => {
  return async (dispatch) => {
    dispatch({ type: "LAUNCH_CLICKED", value });
    dispatch(fetchFilteredList());
  };
};

export const setLandingValue = (value: boolean): AppThunk => {
  return async (dispatch) => {
    dispatch({ type: "LANDING_CLICKED", value });
    dispatch(fetchFilteredList());
  };
};
