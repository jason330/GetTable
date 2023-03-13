import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchRestaurants } from "../../store/restaurants"
import { fetchRestaurants } from "../../store/restaurants"
import RestaurantList from "./RestaurantList"

function RestaurantIndexPage() {

    const dispatch = useDispatch()
    const allRestaurants = useSelector( state => state.restaurants )
    const restaurantsArray = Object.values(allRestaurants)
    
    const [query, setQuery] = useState('')
    const [errors, setErrors] = useState([])
    
    useEffect( () => {
        dispatch(fetchRestaurants())
    },[dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch( searchRestaurants(query) )
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    return(
        <>
            <section className="mainTextContainer">
                <h1 className="sectionText">Find your table for any occasion</h1>
                {/* <form onSubmit={handleSubmit} >
                    <input
                        type="search"
                        required
                        placeholder="Location, Restaurant, or Cuisine"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        />
                    <button type="submit">Let's go</button>
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