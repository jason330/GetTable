import './RestaurantIndexPage.css'

function RestaurantListItem( {restaurant} ) {

    return(
        <li className="restaurantListItemContainer">
            <a href={`/restaurants/${restaurant.id}`}>
                <div className="restaurantIndexContainer">
                    <div>
                        <img className='restaurantIndexImg' src={restaurant.photoUrl} alt="restaurant" />
                    </div>
                    <div className='restaurantIndexTxtContainer'>
                        <h3 className='restaurantIndexName'>
                            {restaurant.name}
                        </h3>
                        <div className='restaurantIndexReviewContainer'></div>
                        <div className='restaurantIndexTypeContainer'>
                            {restaurant.cuisine}
                            <span className='restaurantIndexLocation'>{restaurant.location}</span>                            
                        </div>
                        <button className="restaurantIndexButton">Find a time</button>
                    </div>

                </div>
            </a>            
        </li>
    )
}

export default RestaurantListItem