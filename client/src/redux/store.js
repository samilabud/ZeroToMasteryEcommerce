import { configureStore, Tuple } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleWare = createSagaMiddleWare();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => middlewares,
});

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

export default store;
