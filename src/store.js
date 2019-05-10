import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './reducers/authReducer';
import contactForm from './reducers/contactFormReducer'
import bookings from './reducers/bookingReducer'

const reducers = combineReducers({ auth, contactForm, bookings });
const initialState = {};
// No need for this logger in production
const middlewares = applyMiddleware(logger, thunk, promise);

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(middlewares)
);
