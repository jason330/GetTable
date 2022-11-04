import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from "../../store/restaurants"
import RestaurantList from "./RestaurantList"

function RestaurantIndexPage() {

    const dispatch = useDispatch()
    const allRestaurants = useSelector( state => state.restaurants )
    const restaurantsArray = Object.values(allRestaurants)
    // console.log(restaurantsArray, "hello yo")
    useEffect( () => {
        dispatch(fetchRestaurants())
    },[])

    return(
        <div>Restaurant Index Page
            <RestaurantList restaurantsArray={restaurantsArray} />
        </div>
    )
}

export default RestaurantIndexPage