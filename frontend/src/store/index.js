import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reportReducer from './reports';
import reservationReducer from './reservations';
import restaurantReducer from './restaurants';
import searchReducer from './search';
import sessionReducer from './session';
import userReducer from './user';

const rootReducer = combineReducers({
    session: sessionReducer,
    restaurants: restaurantReducer,
    reservations: reservationReducer,
    user: userReducer,
    reports: reportReducer,
    search: searchReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;