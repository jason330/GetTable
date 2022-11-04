import csrfFetch from "./csrf";

const SET_RESTAURANTS = 'restaurants/setRestaurants'
const SET_RESTAURANT = 'restaurants/setRestaurant'

const setRestaurants = ( restaurants ) => {
    return {
        type: SET_RESTAURANTS,
        payload: restaurants
    }
}

const setRestaurant = ( restaurant ) => {
    return {
        type: SET_RESTAURANT,
        restaurant
    }
}

export const fetchRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('/api/restaurants')
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
            return {...initialState, [action.restaurant.id]: action.restaurant}
        default:
            return initialState;
    }
}
