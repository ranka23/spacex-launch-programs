import axios from "axios";

import mockStore from "../../utils/mockStore";
import spaceXList, {
  initialState,
  getRequest,
  getSuccess,
  getFailure,
  fetchSpaceXList,
  fetchFilteredList,
} from "../spaceXData";

jest.mock("axios");

const mockData = [
  {
    flight_number: 1,
    mission_name: "FalconSat",
    mission_id: ["232", "234234"],
    launch_year: "2006",
    rocket: {
      first_stage: {
        cores: [
          {
            land_success: false,
          },
        ],
      },
    },
    launch_success: false,
    links: {
      mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
    },
  },
];

const state = {
  filterButton: { launchValue: false, landingValue: true, yearValue: "2006" },
};

const mockError = "Oops! Something went wrong.";

describe("SpaceXData reducer", () => {
  it("Should handle initial state", () => {
    // @ts-expect-error
    expect(spaceXList(undefined, {})).toEqual(initialState);
  });

  it("Should handle request correctly", () => {
    expect(spaceXList(undefined, { type: getRequest.type })).toEqual({
      readyStatus: "request",
      items: [],
      error: null,
    });
  });

  it("Should handle success correctly", () => {
    expect(
      spaceXList(undefined, { type: getFailure.type, payload: mockError })
    ).toEqual({ ...initialState, readyStatus: "failure", error: mockError });
  });
});

describe("spaceXList actions", () => {
  it("Fetches spaceX list successfully", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequest.type },
      { type: getSuccess.type, payload: mockData },
    ];

    // @ts-expect-error
    axios.get.mockResolvedValue({ data: mockData });

    await dispatch(fetchSpaceXList());
    expect(getActions()).toEqual(expectedActions);
  });

  it("Fetches spaceXList failed", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequest.type },
      { type: getFailure.type, payload: mockError },
    ];

    // @ts-expect-error
    axios.get.mockRejectedValue({ message: mockError });

    await dispatch(fetchSpaceXList());
    expect(getActions()).toEqual(expectedActions);
  });

  it("Fetches Filtered list successfully", async () => {
    const { dispatch, getActions } = mockStore(state);
    const expectedActions = [
      { type: getRequest.type },
      { type: getSuccess.type, payload: mockData },
    ];

    // @ts-expect-error
    axios.get.mockResolvedValue({ data: mockData });

    await dispatch(fetchFilteredList());
    expect(getActions()).toEqual(expectedActions);
  });

  it("Fetches filtered list failed", async () => {
    const { dispatch, getActions } = mockStore(state);

    const expectedActions = [
      { type: getRequest.type },
      { type: getFailure.type, payload: mockError },
    ];

    // @ts-expect-error
    axios.get.mockRejectedValue({ message: mockError });

    await dispatch(fetchFilteredList());
    expect(getActions()).toEqual(expectedActions);
  });
});
