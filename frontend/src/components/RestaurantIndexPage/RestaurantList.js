import RestaurantListItem from "./RestaurantListItem"

function RestaurantList( {restaurantsArray} ) {
    console.log(restaurantsArray, "restaurantsArry consoled")
    const listItems = restaurantsArray.map(restaurant =>
        <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
        />
    )
    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default RestaurantList