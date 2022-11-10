import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/user";
import UserReservationList from "./UserReservationList";
import './UserPage.css'

export default function UserPage() {

    const user = useSelector(state => {
        if (state.session.user === null ) {
            return null
        } else {
            return state.session.user
    }})

    const dispatch = useDispatch()
    const allReservations = useSelector( state => state.reservations )
    const reservationsArray = Object.values(allReservations)

    useEffect( () => {
        dispatch( fetchUser(user.id) )
    }, [dispatch])

    if ( user === null ) {
        return(
            <h1>Please sign in or sign up to see your dashboard.</h1>
        )
    }

    return(
        <main>
            <h1 className="userPageUsername">{user.username ? user.username : user.email}</h1>
            <h2 className="userPageNav">RESERVATIONS</h2>
            <section>
                <UserReservationList reservationsArray={reservationsArray} />
            </section>
        </main>
    )

}