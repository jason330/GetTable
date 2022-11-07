import csrfFetch from "./csrf"

const ADD_RESERVATION = 'reservations/addReservation'

const addReservation = ( reservation ) => {
    return {
        type: ADD_RESERVATION,
        payload: reservation
    }
}

export const createReservation = ({
    userId,
    restaurantId,
    date,
    time,
    partySize}) => async (dispatch) => {
        const response = await csrfFetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify({
                userId,
                restaurantId,
                date,
                time,
                partySize
            })
        });
        const data = await response.json();
        dispatch(addReservation(data.reservation));
        return response;
}

export default function reservationReducer( initialState = {}, action ) {
    switch (action.type) {
        case ADD_RESERVATION:
            return { ...initialState, [action.payload.id]: action.payload };
        default:
            return initialState
    }
}