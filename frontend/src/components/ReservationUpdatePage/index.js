import reservationReducer from '../../store/reservations'
import calendar from './calendar.svg'

export default function ReservationUpdatePage() {

    return(
        <main>
            <h1>Your current reservation</h1>
            <section>
                <img src="" alt="" />
                <div>
                    <h2>{restaurant.name}</h2>
                    <div>
                        <img src={calendar} alt="" />
                        <h3>{reservation.reservationDate}</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}