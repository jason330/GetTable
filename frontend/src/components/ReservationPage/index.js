import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import greenCheck from './checkImage.svg'
import personIcon from './personIcon.svg'
import calendar from './calendar.svg'
import { destroyReservation, fetchReservation } from "../../store/reservations";
import React, { useEffect, useState } from "react";
import './ReservationPage.css'

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
        <main>
            <section className="reservationMainContainer">
                <img className="reservImage" src="https://images.otstatic.com/prod1/47955298/3/small.jpg" alt="" />
                <div>
                    <h1 className="reservRestaurantName">{restaurant.name}</h1>
                    <div className="reservationConfMessageContainer">
                        {!cancelled &&
                        <img className="greenCheckImage" src={greenCheck} alt="" />}
                        <h2>Reservation {!cancelled ? 'confirmed' : 'cancelled.'}</h2>
                    </div>
                    <div className="reservationDetailsContainer">
                        <div className="reservPartySizeContainer">
                            <img className="reservIcon" src={personIcon} alt="" />
                            <h2>{reservation.partySize}</h2>
                        </div>
                        <div className="reservDateTimeContainer">
                            <img className="reservIcon" src={calendar} alt="" />
                            <h2>{reservation.reservationDate} at {reservation.reservationTime}</h2>
                        </div>
                    </div>
                    {!cancelled &&
                    <div className="reservationUpdateLinkContainer">
                        <a className="reservModifyLink" href={`/reservations/modify/${reservation.id}`}>Modify</a>
                        <h2 className="reservCancelLink" onClick={handleCancel}>Cancel</h2>
                    </div>}
                </div>
            </section>
        </main>
    )
}