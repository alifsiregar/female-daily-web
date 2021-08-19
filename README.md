# Female Daily Website

"Female Daily Website" is a landing page website made in React JS with Typescript. This project is made in order to complete one of the recruitment stage of Female Daily Network. Most components in this project are interactable (such as the sliders).

## Tech Stack

* React JS
* Typescript
* React-Redux
* Styled-Components
* React-Icons
* Axios
* Swiper JS

## Structure

Most of the important folders and files are inside the `src` folder. Inside, you will find 3 __files__:

1. `App.tsx`
2. `index.tsx`
3. `styles.ts`

`App.tsx` is where all the components are placed and also where the HTTP requests for the data are made via Redux dispatch. `index.tsx` is the root file and where the Redux store is placed. `styles.ts` is the file for global styles. 

Aside from the files, you will also find 5 __folders__:

1. `assets`
2. `components`
3. `interfaces`
4. `services`
5. `state`

All of the images and logos used in the project are stored in the `images` folder inside `assets`. `components` folder contains all the components used in this project, there is also an `index.ts` file where all the components are exported in order to make importing easier in other files. `interfaces` is used to store all the data types needed. `services` contains the HTTP request used in this project via axios. `state` contains all the Redux folders and files needed.

## Deployment and Workflow

This project is deployed to github pages and can be accessed [here](https://alifsiregar.github.io/female-daily-web/). The workflow consists of 4 steps:

1. `Install Dependencies`
2. `Run Test`
3. `Build Project`
4. `Deploy Project`

To deploy the project, I am using JamesIves's [Github Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action).

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm start`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The page also has hot reload, which means that it will refresh if you make any edits.

In order to test the project, you can run this syntax in the project directory:

### `npm run test`

This will run all tests in the project which makes sure all the components are rendered correctly.

In order to build the project, you can run this syntax in the project directory:

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

The build is then minified and the app is ready to be deployed!