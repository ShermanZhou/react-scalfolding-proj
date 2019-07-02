import { combineReducers } from 'redux';
import { reducer as planReducer } from './plan.reducer';

const rootReducer = combineReducers({
    planReducer
});

export default rootReducer;
