import csrfFetch from "./csrf"

const ADD_RESERVATION = 'reservations/addReservation'
export const GET_RESERVATION = 'reservations/getReservation'

const addReservation = ( reservation ) => {
    return {
        type: ADD_RESERVATION,
        payload: reservation
    }
}

const getReservation = ( payload ) => {
    return {
        type: GET_RESERVATION,
        payload: payload
    }
}

export const fetchReservation = ( reservationId ) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`)
    const data = await res.json();

    dispatch(getReservation(data))
    return data
}

export const createReservation = ({
    userId,
    restaurantId,
    reservationDate,
    reservationTime,
    partySize}) => async (dispatch) => {
        const response = await csrfFetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify({
                userId,
                restaurantId,
                reservationDate,
                reservationTime,
                partySize
            })
        });
        const data = await response.json();
        dispatch(addReservation(data));
        return data;
}

export default function reservationReducer( initialState = {}, action ) {
    switch (action.type) {
        case ADD_RESERVATION:
            return { ...initialState, [action.payload.id]: action.payload };
        case GET_RESERVATION:
            return { ...initialState, [action.payload.reservation.id]: action.payload.reservation };
        default:
            return initialState
    }
}