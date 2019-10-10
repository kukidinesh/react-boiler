export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export const EXAMPLE_ACTION_RESULT = 'EXAMPLE_ACTION_RESULT';
export const EXAMPLE_ACTION_ERROR = 'EXAMPLE_ACTION_ERROR';
export const EXAMPLE_ACTION_RETRY = 'EXAMPLE_ACTION_RETRY';

export const exampleAction = (data) => {
    return {
        type: EXAMPLE_ACTION,
        payload: data
    }
};


export const second_ACTION = 'second_ACTION';
export const second_ACTION_RESULT = 'second_ACTION_RESULT';
export const second_ACTION_ERROR = 'second_ACTION_ERROR';
export const second_ACTION_RETRY = 'second_ACTION_RETRY';

export const secondAction = (data) => {
    return {
        type: second_ACTION,
        payload: data
    }
};
