import csrfFetch from "./csrf";
import { GET_RESERVATION } from "./reservations";
import { SET_USER } from "./user";

const SET_RESTAURANTS = 'restaurants/setRestaurants'
export const SET_RESTAURANT = 'restaurants/setRestaurant'

const setRestaurants = ( restaurants ) => {
    return {
        type: SET_RESTAURANTS,
        payload: restaurants
    }
}

const setRestaurant = ( restaurant ) => {
    return {
        type: SET_RESTAURANT,
        payload: restaurant
    }
}

export const fetchRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('/api/restaurants')
    const data = await res.json();
    dispatch(setRestaurants(data))
    return res
}

export const searchRestaurants = (query) => async (dispatch) => {
    const res = await csrfFetch('/api/restaurants/search')
    const data = await res.json();
    dispatch(setRestaurants(data))
    return res
}

export const fetchRestaurant = (restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}`)
    const data = await res.json();
    dispatch(setRestaurant(data))
    return res
}

export default function restaurantReducer( initialState = {}, action ) {
    switch (action.type) {
        case SET_RESTAURANTS:
            return action.payload;
        case SET_RESTAURANT:            
            return { ...initialState, [action.payload.restaurant.id]: action.payload.restaurant}
        case GET_RESERVATION:
            return { ...initialState, [action.payload.restaurant.id]: action.payload.restaurant}
        case SET_USER:
            return { ...initialState, ...action.payload.restaurants }
        default:
            return initialState;
    }
}