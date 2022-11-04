import RestaurantListItem from "./RestaurantListItem"

function RestaurantList( {restaurantsArray} ) {
    console.log(restaurantsArray, "restaurantsArry consoled")
    return(
        <ul>Restaurants
            {restaurantsArray.map(restaurant => 
                <RestaurantListItem
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            )
            }
        </ul>
    )
}

export default RestaurantList