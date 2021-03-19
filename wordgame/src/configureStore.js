import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;

// Bonnie stuff
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// export default createStoreWithMiddleware(rootReducer);
