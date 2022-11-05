import { useState } from "react"
import { useDispatch } from "react-redux"

function ReservationForm() {
    const dispatch = useDispatch()
    const [partySize, setPartySize] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [errors, setErrors] = useState([])

    const handleSubmit = ( () => {
        
    })

    return(
        <form action={handleSubmit}>Make a reservation
            <label>Party Size
                <select
                    name="partySize"
                    id=""
                    value={partySize}
                    onChange={ () => setPartySize(partySize) }
                    defaultValue={2}
                >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7 people</option>
                    <option value="8">8 people</option>
                    <option value="9">9 people</option>
                    <option value="10">10 people</option>
                </select>
            </label>
            <div className="reservationFormDateTimeLabelsContainer">
                <label htmlFor="selectedDate">Date</label>
                <label htmlFor="selectedTime">Time</label>
            </div>
            <div className="reservationFormDateTimeContainer">
                <input
                    type="date"
                    min={new Date().toJSON().split('T')[0] }
                    name="selectedDate"
                    id="selectedDate"
                    value={date}
                    onChange={ () => setDate(date) }
                />
                <select
                    name="selectedTime"
                    id="selectedTime"
                    value={time}
                    onChange={ () => setTime(time) }
                    defaultValue="7:00 PM"
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
                <button type="button">Complete reservation</button>
            </div>
        </form>
    )
}

export default ReservationForm