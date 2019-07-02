
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {PLAN_INFLIGHT, PLAN_SUCCESS, PLAN_ERROR} from './actions/plan.action';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);


export {store};