import { combineReducers } from 'redux';
import { reducer as plan } from './plan.reducer';

const rootReducer = combineReducers({
    plan
});

export default rootReducer;
