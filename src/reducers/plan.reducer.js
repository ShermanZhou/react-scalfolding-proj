import {PLAN_ERROR, PLAN_INFLIGHT, PLAN_SUCCESS }  from '../actions/plan.action';
const initState = {
    error: null,
    data: null,
    inflight: false
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case PLAN_INFLIGHT:
            return {
                ...state,
                error: null,
                data: null,
                inflight: true
            };

        case PLAN_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null,
                inflight: false
            };
        case PLAN_ERROR:
            return {
                ...state,
                data: action.data,
                error: action.data,
                inflight: false
            };
        default:
            return state
    }
}
