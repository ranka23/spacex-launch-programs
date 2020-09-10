# SpaceX Launch Programs

As the name suggests, the app lists all the spaceX launch programs conducted since 2006 to 2020. It contains filters that allow users to filter results based on the year of the launch, launch and land successes of the programs.

### Tech & Libs used

  - Typescript
  - React.js with server side rendering
  - Express.js
  - Redux / React Redux / Redux Thunk / Redux Toolkit
  - Axios for API calls
  - Docker to deploy the app (Heroku)
  - Helmet and a few more.

### Features

  - Server side rending the initial list
  - Client side rending for calls made to api for filtering the list.
  - Responsive design and layout

### Usage

```sh
$ clone the repo
$ run 'yarn' to install node modules
$ run 'yarn build'
$ start app with 'yarn start' for production environment
$ run 'yarn dev' for development environment

```

For production environments...

```sh
$ Server on port 8080. You can change it in package.json
```

### Package.json Scripts

| Scripts | Command |
| ------ | ------ |
| dev:  | cross-env NODE_ENV=development PORT=8080 nodemon --exec ts-node --files. |
| start:  | cross-env NODE_ENV=production ts-node --transpile-only --files . |
| build:  | yarn clean:build && cross-env NODE_ENV=production webpack --progress --hide-modules --config ./tools/webpack/config.babel.js |
| analyze:  | yarn clean:build && cross-env NODE_ENV=analyze webpack -p --progress --hide-modules --config ./tools/webpack/config.babel.js |
| type-check:  | tsc --noEmit |
| type-check:watch:  | yarn type-check --watch |
| lint:  | run-p lint:* |
| lint:code:  | eslint --fix . --ext .js,.jsx,.ts,.tsx |
| clean:  | run-p clean:* |
| clean:build:  | rimraf ./public/assets |
| clean:cov:  | rimraf ./coverage |
| docker:  | run-s docker:build docker:start |

License
----

MIT
