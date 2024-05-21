# FlowrSpot

FlowrSpot is a web application designed for flower enthusiasts who enjoy spotting flowers during activities like hiking and traveling. Users can explore various flowers, access detailed information about them, and add their own sightings.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [User Authentication](#user-authentication)
- [Available Scripts](#available-scripts)

## Technologies Used

- React
- TypeScript
- Formik and Yup for form handling and validation
- Axios for API requests
- Jest and React Testing Library for testing

## Setup and Installation

### Clone the Repository

```bash
git clone https://github.com/ernesah/flowr-spot-web.git
cd flowr-spot-web
```

### Install Dependencies

```bash
npm install
# or
yarn
```

## User Authentication

To enable user authentication user authentication follow these steps:

1. Copy the environment variables from the provided `.env.example` file.
2. Create a new file named `.env` in the project root directory.
3. Paste the copied environment variables into the `.env` file.
4. Add API URL to the `.env` file to enable login and registration functionality.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`

Launches the test runner in interactive watch mode. This project includes both unit tests and snapshot tests using Jest and React Testing Library.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
