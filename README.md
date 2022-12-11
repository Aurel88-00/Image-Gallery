## Starting the app
1. Clone the respository in your local machine.
2. Run the commad `cd imgur-app`
3. Run the command `npm install --legacy-peer-deps`, to avoid any problem that might arise from possible version mismatch between the npm packages used in the app.
4. Run the command npm run start.
5. The app will be up and running in your local machine.

## App Overview
The aim of the app is to list a gallery of different categeories of images and every image within each category, showcasing their price. The user is given the number of images contained in each category and the ability to view them.

## Technologies
- The app is built with React Framework using Typescript.
- Material UI is used for the general presentation and the UI.
- The gallery/images data are provied by Unsplash API.

### How to use Unsplash API
- Create an account in Unsplash.
- Follow the steps given in the site
- Grab your client_id and replace it in the `collectionApi.ts` file in the app

