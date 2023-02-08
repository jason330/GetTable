import { useSelector } from "react-redux"
import UserReservationListItem from "./UserReservationListItem"

export default function UserReservationList( {reservationsArray, showReportForm, setShowReportForm, setReport, setRestaurant, setReservation} ) {

    const allReports = useSelector(state => state.reports)
    const reportsArray = Object.values(allReports)

    const reservationListItems = reservationsArray.map(reservation =>
        <UserReservationListItem
            key={reservation.id}
            reservation={reservation}
            report={reportsArray.find(report => report.reservationId === reservation.id)}
            // showReportForm={showReportForm}
            setShowReportForm={setShowReportForm}
            setReport={setReport}
            setRestaurant={setRestaurant}
            setReservation={setReservation}
        />
    )

    return(
        <ul>
            {reservationListItems}
        </ul>
    )
}