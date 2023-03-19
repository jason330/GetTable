import { SET_RESTAURANTS } from "./restaurants";

export default function searchReducer( initialState = null, action ) {
    switch (action.type) {
        case SET_RESTAURANTS:
            return action.payload.search ? action.payload.search : null;
        default:
            return initialState;
    }
}