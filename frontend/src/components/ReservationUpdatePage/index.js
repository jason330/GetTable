import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchReservation } from '../../store/reservations'
import ReservationUpdateForm from '../ReservationUpdateForm'
import calendar from './calendar.svg'
import clock from './clock.svg'
import person from './personIcon.svg'

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
        <main>
            <h1>Your current reservation</h1>
            <section>
                <img src="https://images.otstatic.com/prod1/47955298/3/small.jpg" alt="" />
                <div>
                    <h2>{restaurant.name}</h2>
                    <div>
                        <div>
                            <img src={calendar} alt="" />
                            <h3>{reservation.reservationDate}</h3>
                        </div>
                        <div>
                            <img src={clock} alt="" />
                            <h3>{reservation.reservationTime}</h3>
                        </div>
                        <div>
                            <img src={person} alt="" />
                            <h3>{reservation.partySize}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <h2>Modify your reservation</h2>
            <ReservationUpdateForm reservation={reservation} restaurant={restaurant}/>
        </main>
    )
}