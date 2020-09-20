import { connectRouter } from "connected-react-router";
import { History } from "history";
import filterButton from "./filterReducer";
import spaceXList from "./spaceXData";

// Use inferred return type for making correctly Redux types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (history: History) => ({
  spaceXList,
  filterButton,
  router: connectRouter(history) as any,
});
