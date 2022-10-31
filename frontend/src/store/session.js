import csrfFetch from "./csrf";

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';

const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user
    };
};

const removeSessionUser = () => {
    return {
        type: REMOVE_SESSION_USER
    };
};

const sessionReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case SET_SESSION_USER:
            return { ...state, user: action.user };
        case REMOVE_SESSION_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};

export const loginUser = ({email, password}) => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    debugger
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
};

export default sessionReducer;