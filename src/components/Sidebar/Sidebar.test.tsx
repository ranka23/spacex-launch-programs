import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import mockStore from "../../utils/mockStore";
import Sidebar from "./index";

describe("<Sidebar />", () => {
  const renderHelper = (reducer = { readyStatus: "invalid" }) => {
    const { dispatch, ProviderWithStore } = mockStore({ spaceXData: reducer });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("Should fetch launchValue when page loads", () => {
    const { dispatch } = renderHelper();

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
