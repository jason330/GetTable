import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRestaurant } from "../../store/restaurants";
import './RestaurantShowPage.css'
import utensilIcon from './utensilIcon.svg'
import ReservationForm from "../ReservationForm";
import ReportList from "./ReportList";

function RestaurantShowPage() {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector( state => state.restaurants[restaurantId] )

    useEffect( () => {
        dispatch(fetchRestaurant(restaurantId))
    },[dispatch, restaurantId])

    const allReports = useSelector( state => state.reports )
    const allReportsArray = Object.values(allReports)

    const restaurantReportsArray = allReportsArray.filter(report =>
        report.restaurantId === +restaurantId ).sort((a, b) =>
        new Date(b.reservationDate) - new Date(a.reservationDate))
        
    if ( restaurant === undefined ) return null;

    return(
        <div>
            <div className="restaurantShowImgContainer" >
                <img className="restaurantShowImg" src={restaurant.photoUrl} alt="restaurant" />
            </div>
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
                <h2 className="reviewsHeader">{restaurantReportsArray.length} Review{restaurantReportsArray.length === 1 ? '' : 's'}</h2>
                <ReportList restaurantReportsArray={restaurantReportsArray} />
            </main>
        </div>
    )
}

export default RestaurantShowPage