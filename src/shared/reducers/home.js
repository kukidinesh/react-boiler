import { HOME_ACTION, HOME_ACTION_RESULT, HOME_ACTION_ERROR, HOME_ACTION_RETRY } from '../actions/home';


const initialState = {
    data: {},
    isFetching: false,
    retry: false,
    error: false,
    message: null,
};


const homeReducer = (state = initialState, action) => {

    switch (action.type) {

        case HOME_ACTION:
            return {...state, isFetching: true, error: false, message: null, retry: false};

        case HOME_ACTION_RESULT:
            return {...state, isFetching: false, data: action.data};

        case HOME_ACTION_ERROR:
            return {...state, isFetching: false, message: action.message, retry: false};

        case HOME_ACTION_RETRY:
            return {...state, isFetching: false, message: action.message, retry: false};

        default:
            return state;
    }
};

export default homeReducer;