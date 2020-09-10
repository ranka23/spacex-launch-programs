export default {
  HOST: process.env.NODE_HOST || "localhost", // Define your host from "./package.json"
  PORT: process.env.PORT || 80,
  API_URL: "https://api.spaceXdata.com/v3/launches",
  APP: {
    htmlAttributes: { lang: "en" },
    title: "Space X Launch Programs",
    titleTemplate: "Space X Launch Programs - %s",
    meta: [
      {
        name: "description",
        content:
          "SpaceX Launch Programs helps users find a collection of SpaceX's launch programs based on their launch year and successes.",
      },
    ],
  },
};
