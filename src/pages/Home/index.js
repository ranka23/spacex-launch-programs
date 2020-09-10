/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/*
 * Use .js extension for code-splitting file
 */

import React from "react";
import loadable from "@loadable/component";

import { Loading, ErrorBoundary } from "../../components";

const Home = loadable(() => import("./Home"), {
  fallback: <Loading />,
});

export default (props) => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);
