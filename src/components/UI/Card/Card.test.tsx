import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Card from "./index";

describe("<Card />", () => {
  const tree = (children?: ReactNode) =>
    render(
      <MemoryRouter>
        <Card>{children}</Card>
      </MemoryRouter>
    ).container.firstChild;

  it("Should render nothing if no children", () => {
    expect(tree()).toMatchSnapshot();
  });

  it("Should render children if no errors", () => {
    expect(
      tree(
        <div>
          <h1>Hello World</h1>
        </div>
      )
    ).toMatchSnapshot();
  });
});
