import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import mockStore from "../../utils/mockStore";
import Sidebar from "./index";

describe("<Sidebar />", () => {
  const renderHelper = () => {
    const { dispatch, ProviderWithStore } = mockStore({
      filterButton: {
        launchValue: false,
        landingValue: true,
      },
    });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("Renders the component", () => {
    expect(renderHelper().firstChild).toMatchSnapshot();
  });
});
