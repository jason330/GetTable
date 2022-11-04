import './RestaurantIndexPage.css'

function RestaurantListItem( {restaurant, key} ) {
    console.log(restaurant, "restaurant consoled")
    return(
        <li className="restaurantListItemContainer">
            <a href={`/api/restaurant/${restaurant.id}`}>
                <div className="restaurantIndexContainer">
                    <img className='restaurantIndexImg' src='small-steak.jpeg' alt="steak" />
                    <div className='restaurantIndexTxtContainer'>
                        <h3 className='restaurantIndexName'>
                            {restaurant.name}
                        </h3>
                        <div className='restaurantIndexReviewContainer'></div>
                        <div className='restaurantIndexTypeContainer'>
                            {restaurant.cuisine}
                            {restaurant.location}
                        </div>
                    </div>

                </div>
            </a>            
        </li>
    )
}

export default RestaurantListItem