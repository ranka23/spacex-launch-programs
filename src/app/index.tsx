import React from "react";
import { RouteProps, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";

import config from "../config";
// Import your global styles here
import "normalize.css/normalize.css";
import styles from "./styles.module.scss";

interface Route {
  route: { routes: RouteProps[] };
}

const App = ({ route }: Route) => (
  <div className={styles.App}>
    <Helmet {...config.APP} />
    <meta property="SSR:title" content="spacex-launch-programs" />
    <meta name="description" content="spacex-launch-programs" />
    <meta name="robots" content="index" />
    <link rel="canonical" href="https://warm-reaches-42627.herokuapp.com/" />
    <Link to="/" className={styles.header}>
      <h1>SpaceX Launch Programs</h1>
    </Link>
    {renderRoutes(route.routes)}
    <h6 className={styles.footer}>Developed by: Nikhil Ranka</h6>
  </div>
);

export default hot(module)(App);
