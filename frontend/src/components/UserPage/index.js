import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/user";
import UserReservationList from "./UserReservationList";
import './UserPage.css'
import ReportForm from "../ReportForm";

export default function UserPage() {

    const user = useSelector(state => {
        if (state.session.user === null ) {
            return null
        } else {
            return state.session.user
    }})

    const dispatch = useDispatch()
    const allReservations = useSelector( state => state.reservations )
    const reservationsArray = Object.values(allReservations).sort((a, b) =>
        new Date(b.reservationDate) - new Date(a.reservationDate))    //need to add .filter for specific user?

    useEffect( () => {
        dispatch( fetchUser(user.id) )
    }, [dispatch, user.id])

    const [showReportForm, setShowReportForm] = useState(false)
    const [report, setReport] = useState()
    const [restaurant, setRestaurant] = useState()
    const [reservation, setReservation] = useState()

    if ( user === null ) {
        return(
            <h1 className="userPageUsername">Please sign in or sign up to see your dashboard.</h1>
        )
    }

    if (!showReportForm) {
        return(
            <main>
                <h1 className="userPageUsername">{user.username ? user.username : user.email}</h1>
                <h2 className="userPageNav">RESERVATIONS</h2>
                <section className="userPageReservContainer">
                    <UserReservationList reservationsArray={reservationsArray}
                        // showReportForm={showReportForm}
                        setShowReportForm={setShowReportForm}
                        setReport={setReport}
                        setRestaurant={setRestaurant}
                        setReservation={setReservation}
                    />
                </section>
            </main>
        )
    } else {
        return <ReportForm
            user={user}
            report={report}
            restaurant={restaurant}
            reservation={reservation}
            setShowReportForm={setShowReportForm}
            />
    }
}