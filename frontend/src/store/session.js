import csrfFetch from "./csrf";

const SET_SESSION_USER = 'session/setSessionUser';
export const REMOVE_SESSION_USER = 'session/removeSessionUser';

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

const initialState = {
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
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
    const data = await response.json();
    storeCurrentUser(data.user)
    dispatch(setSessionUser(data.user));
    return response;
};

export const signupUser = ({email, password}) => async (dispatch) => {
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json();
    storeCurrentUser(data.user)
    dispatch(setSessionUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    storeCurrentUser(null)
    dispatch(removeSessionUser());
    return response;
};

export const restoreSession = () => async dispatch => {
    const res = await fetch('/api/session')
    storeCSRFToken(res)
    const data = await res.json();
    storeCurrentUser(data.user)
    dispatch(setSessionUser(data.user))
    return res
}

function storeCSRFToken(response) {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = (user) => {
    if ( user ) sessionStorage.setItem( 'currentUser', JSON.stringify(user))
    else sessionStorage.removeItem( 'currentUser' )
}

export default sessionReducer;