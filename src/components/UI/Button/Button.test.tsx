import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Button from "./index";

describe("<Button />", () => {
  const tree = () =>
    render(
      <MemoryRouter>
        <Button
          onClick={() => {
            console.log("Hello World");
          }}
          toggleValue="2020"
        />
      </MemoryRouter>
    ).container.firstChild;

  it("renders props with no errors", () => {
    expect(tree()).toMatchSnapshot();
  });
});
