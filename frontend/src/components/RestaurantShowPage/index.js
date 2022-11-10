import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRestaurant } from "../../store/restaurants";
import './steak.jpeg' 
import './RestaurantShowPage.css'
import utensilIcon from './utensilIcon.svg'
import ReservationForm from "../ReservationForm";

function RestaurantShowPage() {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector( state => state.restaurants[restaurantId] )

    useEffect( () => {
        dispatch(fetchRestaurant(restaurantId))
    },[dispatch, restaurantId])

    if ( restaurant === undefined ) return null;

    return(
        <div>
            <img className="restaurantShowImg" src='../steak.jpeg' alt="" />
            <main className="restaurantShowMainContainer">
                <h1 className="restaurantShowName">
                    {restaurant.name}
                </h1>
                <div className="restaurantShowDetails">
                    <div className="utensilIconContainer">
                        <img className="utensilIcon" src={utensilIcon} alt="fork and knife" />
                        {restaurant.cuisine}
                    </div>
                </div>
                <div className="restaurantShowDescription">
                    {restaurant.description}
                </div>
                <div className="reservationFormContainer">
                    <ReservationForm />
                </div>
            </main>
        </div>
    )
}

export default RestaurantShowPage