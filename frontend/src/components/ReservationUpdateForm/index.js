import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { updateReservation } from "../../store/reservations"

export default function ReservationUpdateForm({reservation, restaurant}) {
    const dispatch = useDispatch()
    const {reservationId} = useParams()
    const [partySize, setPartySize] = useState(reservation.partySize)
    const [reservationDate, setReservationDate] = useState(reservation.reservationDate)
    const [reservationTime, setReservationTime] = useState(reservation.reservationTime)
    const [errors, setErrors] = useState([])
    const restaurantId = restaurant.id;
    const history = useHistory()

    const userId = useSelector(state => {
        if (state.session.user === null ) {
            return null
        } else {
            return state.session.user.id
        }})

    const handleSubmit = ( (e) => {
        e.preventDefault();

        if (userId) {
            setErrors([]);
            return dispatch(updateReservation(reservationId, {
                userId,
                restaurantId,
                reservationDate,
                reservationTime,
                partySize}
            ))
                .catch(async (res) => {
                    let data;
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text(); // Will hit this case if the server is down
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                })                
                .then(data=>history.push(`/reservations/${data.reservation.id}`))
        }
        return setErrors( ['Please sign in or click Demo User to make a reservation.'])
    })

    return(
        <form className="reservForm" onSubmit={handleSubmit}>
            <div className="partySizeContainer">
                <label className="partySizeLabel">Party Size</label>
                <select
                    name="partySize"
                    id=""
                    className="partySizeSelect"
                    value={partySize}
                    onChange={ (e) => setPartySize(e.target.value) }
                    // defaultValue={2}
                >
                    <option value={1}>1 person</option>
                    <option value={2}>2 people</option>
                    <option value={3}>3 people</option>
                    <option value={4}>4 people</option>
                    <option value={5}>5 people</option>
                    <option value={6}>6 people</option>
                    <option value={7}>7 people</option>
                    <option value={8}>8 people</option>
                    <option value={9}>9 people</option>
                    <option value={10}>10 people</option>
                </select>
            </div>
            <div className="reservationFormDateTimeLabelsContainer">
                <label className="reservFormDateTime" htmlFor="selectedDate">Date</label>
                <label className="reservFormDateTime" htmlFor="selectedTime">Time</label>
            </div>
            <div className="reservationFormDateTimeContainer">
                <input
                    type="date"
                    min={new Date().toJSON().split('T')[0] }
                    name="selectedDate"
                    id="selectedDate"
                    className="reservFormDate"
                    value={reservationDate}
                    onChange={ (e) => setReservationDate(e.target.value) }
                />
                <select
                    name="selectedTime"
                    id="selectedTime"
                    className="reservFormTime"
                    value={reservationTime}
                    onChange={ (e) => setReservationTime(e.target.value) }
                    // defaultValue="7:00 PM"
                >
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                    <option value="9:30 PM">9:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="10:30 PM">10:30 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                    <option value="11:30 PM">11:30 PM</option>
                </select>
            </div>
            <button className="reservFormButton red" type="submit">Complete reservation</button>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        </form>
    )
}