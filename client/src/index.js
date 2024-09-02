import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { store, persistor } from "./redux/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { stripePromise } from "./utils/stripe/stripe.utils";

// Create the root using the new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app with the new API
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

// Register service worker
serviceWorkerRegistration.register();

// Measure performance
reportWebVitals();
