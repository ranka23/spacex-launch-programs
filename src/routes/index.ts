import App from "../app";
import { asyncHome, NotFound } from "../pages";
import { AppThunk } from "../store";
import { fetchSpaceXListIfNeed } from "../store/spaceXDataReducer";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: asyncHome, // Add your route here
        loadData: (): AppThunk[] => [fetchSpaceXListIfNeed()],
      },
      {
        component: NotFound,
      },
    ],
  },
];
