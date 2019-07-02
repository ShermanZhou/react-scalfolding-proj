const PLAN_INFLIGHT = 'PLAN_INFLIGHT';
const PLAN_SUCCESS = 'PLAN_SUCCESS';
const PLAN_ERROR = 'PLAN_ERROR';
export {
    PLAN_INFLIGHT, PLAN_SUCCESS, PLAN_ERROR
};


const loadPlan = ()=> (dispatch, getState) => {
    dispatch({ type: PLAN_INFLIGHT });
    window.setTimeout(() => {
        dispatch({
            type: PLAN_SUCCESS, data: [{
                day: 'day:1',
                value: 'genesis 1:1 - genesis 1:7'
            }]
        });
    }, 1000);
};
export { loadPlan }