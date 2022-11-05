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
    },[dispatch])

    return(
        <>
            <section>
                <h1 className="sectionText">Find your table for any occasion</h1>
            </section>
            <div className="restaurantsArrayContainer">
                <h2 className="restaurantsArrayTitle">Popular restaurants in San Francisco</h2>
                <RestaurantList restaurantsArray={restaurantsArray} />
            </div>
        
        </>
    )
}

export default RestaurantIndexPage