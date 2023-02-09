import { useState } from "react"

export default function ReportForm( {user, report, restaurant, reservation} ) {

    const ReportStars = () => {
        const ratings = [1,2,3,4,5]
        const [hoveredStar, setHoveredStar] = useState()
        const [selectedStar, setSelectedStar] = useState()

        let cssClass
        if (hoveredStar) {
            cssClass = hoveredStar.toString()
        } else if (selectedStar) {
            cssClass = selectedStar.toString()
        } else {
            cssClass = "ratingStar"
        }

        const ratingText = {
            1: "Outstanding",
            2: "Very good",
            3: "Good",
            4: "Fair",
            5: "Poor"
        }

        return(
            <>
                <div>{ratings.map(rating =>
                    <img
                        src=""
                        onMouseEnter={ () => setHoveredStar(rating) }
                        onMouseLeave={ () => setHoveredStar() }
                        onClick={ () => setSelectedStar(rating) }
                        className={cssClass}
                        key={rating}
                        alt={`${rating}`} />
                    )
                }
                </div>
                <h4>{ratingText[selectedStar]}</h4>
            </>
        )
        for (let i of numStars) {
            <img src="" alt="" />

        }
    }
    return(
        <main>
            <h1>
            {user.username ? user.username : user.email}, how was your experience at {restaurant.name}
            </h1>
            <h2>Rate your dining experience</h2>
            <h2>Reservation made on {reservation.reservationDate}</h2>
            <form className="">
                <h3>Overall</h3>
                <ReportStars />

            </form>
        </main>
    )
}