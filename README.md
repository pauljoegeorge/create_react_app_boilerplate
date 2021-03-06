# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisite
  - Install husky && npm 7
    - husky will run lint command on git commit operation
    - this helps to block pushing unformatted code to Github
  ```
   - git clone https://github.com/pauljoegeorge/create_react_app_boilerplate.git .
   - rm package-lock.json
   - npm i -g npm@7
   - npm install
   - npm run prepare
  ```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run lint:fix`

This command fix lint errors as much as possible

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Supported features
### `GA4 and GTM`
  - Update GTM container ID to start using
    - https://github.com/pauljoegeorge/create_react_app_boilerplate/blob/b3902682d4d5adc7e8d533e14e1bb88e267476fb/src/index.jsx#L8-L10

### `styled and react-bootstrap`
  - for styling and responsive template
  - refer:
    - `react-bootstrap`:
      - https://github.com/pauljoegeorge/create_react_app_boilerplate/blob/master/src/containers/Home/index.jsx#L3
    - `styled`
      - https://github.com/pauljoegeorge/create_react_app_boilerplate/blob/master/src/components/Wrapper.jsx#L1-L3

# TODO:
- Router [DONE]
- Locale
- Google Analytics [DONE]
- Axios - HTTP client
- styled [DONE]
- react-bootstrap [DONE]
