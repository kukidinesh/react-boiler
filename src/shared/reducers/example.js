import {EXAMPLE_ACTION, EXAMPLE_ACTION_RESULT,
 EXAMPLE_ACTION_ERROR, EXAMPLE_ACTION_RETRY,second_ACTION, 
 second_ACTION_RESULT, second_ACTION_ERROR, second_ACTION_RETRY} 
 from '../actions/example';


const initialState = {
    data: {},
    isFetching: false,
    retry: false,
    error: false,
    message: null,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case EXAMPLE_ACTION:
            return {...state, isFetching: true, error: false, message: null, retry: false};

        case EXAMPLE_ACTION_RESULT:
            return {...state, isFetching: false, data: action.data};

        case EXAMPLE_ACTION_RETRY:
            return {...state, isFetching: false, message: action.message, retry: false};

        case EXAMPLE_ACTION_ERROR:
            return {...state, isFetching: false, message: action.message, retry: false};

        default:
            return state;
    }

};








const initialState1 = {
    data: {},
    isFetching: false,
    retry: false,
    error: false,
    message: null,
};


const reducer1 = (state = initialState, action) => {

    switch (action.type) {

        case second_ACTION:
            return {...state, isFetching: true, error: false, message: null, retry: false};

        case second_ACTION_RESULT:
            return {...state, isFetching: false, data: action.data};

        case second_ACTION_RETRY:
            return {...state, isFetching: false, message: action.message, retry: false};

        case second_ACTION_ERROR:
            return {...state, isFetching: false, message: action.message, retry: false};

        default:
            return state;
    }

};

export default reducer;
export {reducer1};
