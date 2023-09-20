Live website: https://effervescent-peony-900996.netlify.app

The app utilizes CSS grid and flexbox in styled-components for efficient layout management. It also has a robust state management system for the product cart and filters using the React "useContext" hook, enabling effortless data synchronization among app components. The Auth0 API is integrated for user authentication and Stripe API is used for payment processing. 

To run the app locally go to an IDE and set up these environmental variables from Auth0 and Stripe
<br/>REACT_APP_AUTH_DOMAIN=
<br/>REACT_APP_AUTH_CLIENT_ID=
<br/>REACT_APP_STRIPE_PUBLIC_KEY=
<br/>REACT_APP_STRIPE_SECRET_KEY=

Then install dependencies and start the server via "npm start". The app will be available at http://localhost:3000/
