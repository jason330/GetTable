import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from "../../store/restaurants"
import RestaurantList from "./RestaurantList"

function RestaurantIndexPage() {

    const dispatch = useDispatch()
    const allRestaurants = useSelector( state => state.restaurants )
    const restaurantsArray = Object.values(allRestaurants)
    
    useEffect( () => {
        dispatch(fetchRestaurants())
    },[dispatch])

    return(
        <>
            <section className="mainTextContainer">
                <h1 className="sectionText">Find your table for any occasion</h1>
                {/* <form >
                    <input
                        type="search"
                        required
                        placeholder="Location, Restaurant, or Cuisine"
                        />
                </form> */}
            </section>
            <section className="restaurantsMainContainer">
                <div className="restaurantsMainSubContainer">
                    <div>
                        <h2 className="restaurantsArrayTitle">Popular restaurants in the San Francisco Bay Area</h2>
                    </div>
                    <div>
                        <RestaurantList restaurantsArray={restaurantsArray} />
                    </div>
                </div>
            </section>        
        </>
    )
}

export default RestaurantIndexPage