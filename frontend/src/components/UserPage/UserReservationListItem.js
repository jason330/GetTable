import { useSelector } from "react-redux"
import greenCheck from './checkImage.svg'
import personIcon from './personIcon.svg'
import calendar from './calendar.svg'

export default function UserReservationListItem( {reservation} ) {
    const restaurant = useSelector(state => state.restaurants[reservation.restaurantId])

    const pastReservation = new Date(reservation.reservationDate) - new Date() < 0
    console.log('res.res date is ' + reservation.reservationDate)
    console.log('new date(res.res date) is ' + new Date(reservation.reservationDate))
    console.log('new date is ' + new Date())
    if (!pastReservation) {
        return(
            <a className="userPageReservItemContainer" href={`/reservations/${reservation.id}`}>
                <img className="reservImage" src={restaurant.photoUrl} alt="restaurant" />
                <div>
                    <h1 className="reservRestaurantName">{restaurant.name}</h1>
                    <div className="reservationConfMessageContainer">
                        <img className="greenCheckImage" src={greenCheck} alt="green check mark" />
                        <h2 className="reservationConfTxt">Reservation confirmed</h2>
                    </div>
                    <div className="reservationDetailsContainer">
                        <div className="reservPartySizeContainer">
                            <img className="reservIcon" src={personIcon} alt="person icon" />
                            <h2>{reservation.partySize}</h2>
                        </div>
                        <div className="reservDateTimeContainer">
                            <img className="reservIcon" src={calendar} alt="calendar" />
                            <h2>{reservation.reservationDate} at {reservation.reservationTime}</h2>
                        </div>
                    </div>
                    {/* {!cancelled &&
                    <div className="reservationUpdateLinkContainer">
                        <a href={`/reservations/modify/${reservation.id}`}>Modify</a>
                        <h2 onClick={handleCancel}>Cancel</h2>
                    </div>} */}
                </div>
            </a>
        )
    }
}