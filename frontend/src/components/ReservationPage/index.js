import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import greenCheck from './checkImage.svg'
import personIcon from './personIcon.svg'
import calendar from './calendar.svg'
import { fetchReservation } from "../../store/reservations";
import { fetchRestaurant } from "../../store/restaurants";
import React, { useEffect } from "react";

export default function ReservationPage() {
    const dispatch = useDispatch()
    const { reservationId } = useParams()

    useEffect(()=> {
        dispatch( fetchReservation( reservationId ))
    }, [dispatch, reservationId] )

    const reservation = useSelector( state => {
        if (state.reservations[reservationId]) {
            return state.reservations[reservationId]
        } else {
            return null
        }
    })

    const restaurant = useSelector( state => {
        if ( reservation ) {
            return state.restaurants[reservation.restaurantId]
        } else {
            return null
        }
    })

    if ( !reservation || !restaurant ) {
        return null
    }

    return(
        <main className="reservationMainContainer">
            <section>
                <img src="" alt="" />
                <div>
                    <h1>{restaurant.name}</h1>
                    <div className="reservationConfMessageContainer">
                        <img src={greenCheck} alt="" />
                        <h2 className="reservationConfTxt">Reservation confirmed</h2>
                    </div>
                    <div className="reservationDetailsContainer">
                        <img src={personIcon} alt="" />
                        <h2>{reservation.partySize}</h2>
                        <img src={calendar} alt="" />
                        <h2>{reservation.reservationDate} at {reservation.reservationTime}</h2>
                    </div>
                    <div className="reservationUpdateLinkContainer">
                        <a href="">Modify</a>
                        <a href="">Cancel</a>
                    </div>
                </div>
            </section>
        </main>
    )
}