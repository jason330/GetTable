import UserReservationListItem from "./UserReservationListItem"

export default function UserReservationList( {reservationsArray} ) {

    const reservationListItems = reservationsArray.map(reservation =>
        <UserReservationListItem
            key={reservation.id}
            reservation={reservation}
        />
    )

    return(
        <ul>
            {reservationListItems}
        </ul>
    )
}