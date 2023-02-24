import csrfFetch from "./csrf"
import { REMOVE_SESSION_USER } from "./session"
import { SET_USER } from "./user"

export const GET_RESERVATION = 'reservations/getReservation' 
const ADD_RESERVATION = 'reservations/addReservation'
const MODIFY_RESERVATION = 'reservations/modifyReservation'
const DELETE_RESERVATION = 'reservations/cancelReservation'

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

const modifyReservation = ( reservation ) => {
    return {
        type: MODIFY_RESERVATION,
        payload: reservation
    }
}

const deleteReservation = ( reservationId ) => {
    return {
        type: DELETE_RESERVATION,
        payload: reservationId
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

export const updateReservation = (reservationId, {
    userId,
    restaurantId,
    reservationDate,
    reservationTime,
    partySize}) => async (dispatch) => {
        const response = await csrfFetch(`/api/reservations/${reservationId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                userId,
                restaurantId,
                reservationDate,
                reservationTime,
                partySize
            })
        });
        const data = await response.json();
        dispatch(modifyReservation(data));
        return data;
}

export const destroyReservation = ( reservationId ) => async (dispatch) => {
        const response = await csrfFetch(`/api/reservations/${reservationId}`, {
            method: 'DELETE',
            body: JSON.stringify( { reservationId } )
        });
        const data = await response.json();
        dispatch(deleteReservation(data));
        return data;
}

export default function reservationReducer( initialState = {}, action ) {
    switch (action.type) {
        case ADD_RESERVATION:
            return { ...initialState, [action.payload.id]: action.payload };
        case GET_RESERVATION:
            return { ...initialState, [action.payload.reservation.id]: action.payload.reservation };
        case MODIFY_RESERVATION:
            return { ...initialState, [action.payload.id]: action.payload }
        case DELETE_RESERVATION:
            const newState = { ...initialState }
            delete newState[action.payload]
            return newState
        case SET_USER:
            return { ...initialState, ...action.payload.reservations }
        case REMOVE_SESSION_USER:
            return {}
        default:
            return initialState
    }
}