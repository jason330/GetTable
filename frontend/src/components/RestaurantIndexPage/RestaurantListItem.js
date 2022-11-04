function RestaurantListItem( {restaurant} ) {
    console.log(restaurant, "restaurant consoled")
    return(
        <li>
            {restaurant.name}
            {restaurant.location}
            
        </li>
    )
}

export default RestaurantListItem