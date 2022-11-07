import RestaurantListItem from "./RestaurantListItem"

export default function RestaurantList( {restaurantsArray} ) {

    const listItems = restaurantsArray.map(restaurant =>
        <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
        />
    )

    return(
        <ul className="restaurantListContainer">
            {listItems}
        </ul>
    )
}