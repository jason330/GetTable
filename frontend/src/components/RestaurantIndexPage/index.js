import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchRestaurants } from "../../store/restaurants"
import { fetchRestaurants } from "../../store/restaurants"
import RestaurantList from "./RestaurantList"

function RestaurantIndexPage() {

    const dispatch = useDispatch()
    const allRestaurants = useSelector( state => state.restaurants )
    const restaurantsArray = allRestaurants ? Object.values(allRestaurants) : []
    
    const [query, setQuery] = useState('')
    const [errors, setErrors] = useState([])
    
    useEffect( () => {
        dispatch(fetchRestaurants())
    },[dispatch])

    const priorSearch = useSelector( state => state.search )

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
                <div className='searchContainer'>
                    <h1 className="sectionText">Find your table for any occasion</h1>
                    <form
                        className='searchForm'
                        role='search' 
                        onSubmit={handleSubmit}
                    >
                        <div className='search'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fillRule="evenodd"><path d="M13,15.9291111 L13,21.5 C13,21.7761424 12.7761424,22 12.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5 L11,15.9291111 C7.60770586,15.4438815 5,12.5264719 5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.5264719 16.3922941,15.4438815 13,15.9291111 Z M12,4 C9.23857625,4 7,6.23857625 7,9 C7,11.7614237 9.23857625,14 12,14 C14.7614237,14 17,11.7614237 17,9 C17,6.23857625 14.7614237,4 12,4 Z" fill="#2D333F" fillRule="nonzero" transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000)"></path></g>
                            </svg>
                            <input
                                type="text"
                                required
                                className=''
                                placeholder="Location, Restaurant, or Cuisine"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                />
                        </div>
                        <button type="submit">Let's go</button>
                    </form>
                </div>
            </section>
            <section className="restaurantsMainContainer">
                <div className="restaurantsMainSubContainer">
                    <div>{allRestaurants &&
                        <h2 className="restaurantsArrayTitle">{priorSearch ? `Results for "${priorSearch}"` : 'Popular restaurants'} in the San Francisco Bay Area</h2>
                    }
                    {!allRestaurants &&
                        <h2 className="restaurantsArrayTitle">{priorSearch ? `Sorry, we couldn't find any results for "${priorSearch}"` : 'Popular restaurants'} in the San Francisco Bay Area</h2>
                    }
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