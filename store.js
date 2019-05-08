import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import auth from './reducers/authReducer';

const middlewares = applyMiddleware(thunk, logger);
const reducers = combineReducers({auth});

export function initializeStore (state = {}) {
  return createStore(
    reducers,
    state,
    composeWithDevTools(middlewares)
  )
}
