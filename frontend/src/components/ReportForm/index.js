export default function ReportForm( {user, report, restaurant, reservation} ) {
    return(
        <main>
            <h1>
            {user.username ? user.username : user.email}, how was your experience at {restaurant.name}
            </h1>
            <h2>Rate your dining experience</h2>
            <h2>Reservation made on {reservation.reservationDate}</h2>
            <h3></h3>
        </main>
    )
}