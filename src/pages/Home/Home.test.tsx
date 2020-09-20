import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { fetchSpaceXListIfNeed } from "../../store/spaceXData";

import mockStore from "../../utils/mockStore";
import Home from "./Home";

describe("<Home />", () => {
  const renderHelper = (reducer = { readyStatus: "invalid" }) => {
    const { dispatch, ProviderWithStore } = mockStore({
      spaceXList: reducer,
      filterButton: {
        launchValue: false,
        landingValue: true,
      },
    });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("Should fetch data when page loads", () => {
    const { dispatch } = renderHelper();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].toString()).toBe(
      fetchSpaceXListIfNeed().toString()
    );
  });

  it("Renders the loading status if data invalid", () => {
    expect(renderHelper().firstChild).toMatchSnapshot();
  });

  it("Renders the loading status when requesting data", () => {
    const reducer = { readyStatus: "request" };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("Renders the <List /> if loading was successful", () => {
    const reducer = {
      readyStatus: "success",
      items: [
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
      ],
    };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });
});
