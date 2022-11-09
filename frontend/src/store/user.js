import csrfFetch from "./csrf";

export const SET_USER = 'user/setUser'

const setUser = (payload) => {
    return {
        type: SET_USER,
        payload: payload
    }
}

export const fetchUser = ( userId ) => async (dispatch) => {
    debugger
    const res = await csrfFetch(`/api/users/${userId}`)
    const data = await res.json();
    dispatch(setUser(data))
    return res
}

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload.user };
        default:
            return state;
    }
}

export default userReducer