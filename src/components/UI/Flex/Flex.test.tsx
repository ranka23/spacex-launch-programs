import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Flex from "./index";

describe("<Flex />", () => {
  const tree = (children?: ReactNode) =>
    render(
      <MemoryRouter>
        <Flex>{children}</Flex>
      </MemoryRouter>
    ).container.firstChild;

  it("renders nothing if no children", () => {
    expect(tree()).toMatchSnapshot();
  });

  it("renders children if no errors", () => {
    expect(
      tree(
        <div>
          <h1>Hello World</h1>
        </div>
      )
    ).toMatchSnapshot();
  });
});
