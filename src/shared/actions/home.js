export const HOME_ACTION = 'HOME_ACTION';
export const HOME_ACTION_RESULT = 'HOME_ACTION_RESULT';
export const HOME_ACTION_ERROR = 'HOME_ACTION_ERROR';
export const HOME_ACTION_RETRY = 'HOME_ACTION_RETRY';

export const homeAction = (data) => {
    return {
        type: HOME_ACTION,
        payload: data
    }
};