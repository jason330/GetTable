import csrfFetch from "./csrf"
import { SET_RESTAURANT } from "./restaurants"
import { SET_USER } from "./user"

const ADD_REPORT = 'reports/addReport'
const MODIFY_REPORT = 'reports/modifyReport'
const DELETE_REPORT = 'reports/deleteReport'

const addReport = (report) => {
    return {
        type: ADD_REPORT,
        payload: report
    }
}

const modifyReport = (report) => {
    return {
        type: MODIFY_REPORT,
        payload: report
    }
}

const deleteReport = (reportId) => {
    return {
        type: DELETE_REPORT,
        payload: reportId
    }
}

export const createReport = ({
    userId,
    restaurantId,
    reservationId,
    ratingOverall,
    ratingFood,
    ratingService,
    ratingAmbience,
    review
}) => async (dispatch) => {
    const res = await csrfFetch('/api/reports', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            restaurantId,
            reservationId,
            ratingOverall,
            ratingFood,
            ratingService,
            ratingAmbience,
            review
        })
    })
    const data = await res.json()
    dispatch(addReport(data))
    return data
}

export const updateReport = (reportId, {
    userId,
    restaurantId,
    reservationId,
    ratingOverall,
    ratingFood,
    ratingService,
    ratingAmbience,
    review
}) => async (dispatch) => {
    const res = await csrfFetch(`/api/reports/${reportId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            userId,
            restaurantId,
            reservationId,
            ratingOverall,
            ratingFood,
            ratingService,
            ratingAmbience,
            review
        })
    })
    const data = await res.json();
    dispatch(modifyReport(data))
    return data
}

export const destroyReport = (reportId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reports/${reportId}`, {
        method: 'DELETE',
        body: JSON.stringify( {reportId} )
    })
    const data = await res.json()
    dispatch(deleteReport(data))
    return data
}

export default function reportReducer( initialState = {}, action ) {
    switch (action.type) {
        case ADD_REPORT:
            return { ...initialState, [action.payload.id]: action.payload }
        case MODIFY_REPORT:
            return { ...initialState, [action.payload.id]: action.payload }
        case DELETE_REPORT:
            const newState = { ...initialState }
            delete newState[action.payload]
            return newState
        case SET_RESTAURANT:
            return { ...initialState, ...action.payload.reports }
        case SET_USER:
            return { ...initialState, ...action.payload.reports }
        default:
            return initialState
    }
}