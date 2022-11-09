import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import greenCheck from './checkImage.svg'
import personIcon from './personIcon.svg'
import calendar from './calendar.svg'
import { destroyReservation, fetchReservation } from "../../store/reservations";
import React, { useEffect, useState } from "react";

export default function ReservationPage() {
    const dispatch = useDispatch()
    const { reservationId } = useParams()
    const [cancelled, setCancelled] = useState(false)

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

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch( destroyReservation(reservationId) )
        setCancelled(true)
    }

    return(
        <main className="reservationMainContainer">
            <section>
                <img src="" alt="" />
                <div>
                    <h1>{restaurant.name}</h1>
                    <div className="reservationConfMessageContainer">
                        {!cancelled &&
                        <img src={greenCheck} alt="" />}
                        <h2 className="reservationConfTxt">Reservation {!cancelled ? 'confirmed' : 'cancelled.'}</h2>
                    </div>
                    <div className="reservationDetailsContainer">
                        <img src={personIcon} alt="" />
                        <h2>{reservation.partySize}</h2>
                        <img src={calendar} alt="" />
                        <h2>{reservation.reservationDate} at {reservation.reservationTime}</h2>
                    </div>
                    {!cancelled &&
                    <div className="reservationUpdateLinkContainer">
                        <a href={`/reservations/modify/${reservation.id}`}>Modify</a>
                        <h2 onClick={handleCancel}>Cancel</h2>
                    </div>}
                </div>
            </section>
        </main>
    )
}