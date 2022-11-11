import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchReservation } from '../../store/reservations'
import ReservationUpdateForm from '../ReservationUpdateForm'
import calendar from './calendar.svg'
import clock from './clock.svg'
import person from './personIcon.svg'
import './ReservationUpdatePage.css'

export default function ReservationUpdatePage() {
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
        <main className='reservModifyMainContainer'>
            <h1 className='reservModifyHeader'>Your current reservation</h1>
            <section className='reservModifyCurrentResContainer'>
                <img className='reservModifyImage' src={restaurant.photoUrl} alt="restaurant" />
                <div className='reservModifyCurrentResText'>
                    <h2 className='reservModifyRestaurantName'>{restaurant.name}</h2>
                    <div className='reservModifyCurrentDetails'>
                        <div className='reservModifyCurrentDT'>
                            <img className='reservModifyIcon' src={calendar} alt="calendar" />
                            <h3 className='reservModifyCurr'>{reservation.reservationDate}</h3>
                        </div>
                        <div className='reservModifyCurrentDT'>
                            <img className='reservModifyIcon' src={clock} alt="clock" />
                            <h3 className='reservModifyCurr'>{reservation.reservationTime}</h3>
                        </div>
                        <div className='reservModifyPartyContainer'>
                            <img className='reservModifyIcon' src={person} alt="person icon" />
                            <h3 className='reservModifyCurr'>{reservation.partySize}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <h2 className='reservModifyText'>Modify your reservation</h2>
            <ReservationUpdateForm reservation={reservation} restaurant={restaurant}/>
        </main>
    )
}