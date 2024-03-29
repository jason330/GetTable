import { useState } from "react"
import { useDispatch } from "react-redux"
import { createReport, updateReport } from "../../store/reports"
import './ReportForm.css'

export default function ReportForm( {user, report, restaurant, reservation, setShowReportForm} ) {

    const [hoveredOverall, setHoveredOverall] = useState()
    const [hoveredFood, setHoveredFood] = useState()
    const [hoveredService, setHoveredService] = useState()
    const [hoveredAmbience, setHoveredAmbience] = useState()

    const [selectedOverall, setSelectedOverall] = useState(report ? report.ratingOverall : 0)
    const [selectedFood, setSelectedFood] = useState(report ? report.ratingFood  : 0)
    const [selectedService, setSelectedService] = useState(report ? report.ratingService  : 0)
    const [selectedAmbience, setSelectedAmbience] = useState(report ? report.ratingAmbience  : 0)
    const [review, setReview] = useState(report ? report.review  : '')

    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])

    const ReportStars = ( {hovered, setHovered, selected, setSelected} ) => {
        const ratings = [1,2,3,4,5]
        const hoveredStar = hovered
        const setHoveredStar = setHovered
        const selectedStar = selected
        const setSelectedStar = setSelected
        
        let numRedStars
        if (hoveredStar) {
            numRedStars = hoveredStar
        } else if (selectedStar) {
            numRedStars = selectedStar
        } else {
            numRedStars = 0
        }

        const ratingText = {
            1: "Poor",
            2: "Fair",
            3: "Good",
            4: "Very good",
            5: "Outstanding"
        }

        return(
            <>
                <div className="starContainer">{ratings.map(rating =>
                    <svg xmlns="http://www.w3.org/2000/svg"
                    className="ratingStar"
                    width='32' height='32'
                    viewBox="0 0 16 16"
                    onMouseEnter={ () => setHoveredStar(rating) }
                    onMouseLeave={ () => setHoveredStar() }
                    onClick={ () => setSelectedStar(rating) }
                    key={rating}
                    alt={`${rating} out of 5 stars`}
                    ><path 
                    d="M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z"
                    fill={numRedStars >= rating ? '#da3743' : "#E1E1E1"} />
                    </svg>
                    )
                }
                </div>
                <h4 className="reportRatingText">{ratingText[numRedStars]}</h4>
            </>
        )
    }

    const handleSubmit = ( e => {
        e.preventDefault();

        if (!user) {
            return setErrors( ['Please sign in or click Demo User to leave a review.'])
        }
        
        setErrors([]);
        if (!report) {
            return dispatch(createReport({
                userId: user.id,
                restaurantId: restaurant.id,
                reservationId: reservation.id,
                ratingOverall: selectedOverall,
                ratingFood: selectedFood,
                ratingService: selectedService,
                ratingAmbience: selectedAmbience,
                review: review
            }))
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
                .then(() => setShowReportForm(false))
        }

        return dispatch(updateReport( report.id, {
            userId: user.id,
            restaurantId: restaurant.id,
            reservationId: reservation.id,
            ratingOverall: selectedOverall,
            ratingFood: selectedFood,
            ratingService: selectedService,
            ratingAmbience: selectedAmbience,
            review: review
        }))
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
            .then(() => setShowReportForm(false))
    })

    return(
        <div>
            <h1 className="reportHeader">
            {user.username ? user.username : user.email}, how was your experience at {restaurant.name}
            </h1>
            <h2 className="reportInstruct">Rate your dining experience</h2>
            <h2 className="reportInstruct">Reservation on {reservation.reservationDate}</h2>
            <form className="reportForm" onSubmit={handleSubmit}>
                <div className="reportRatingContainer">
                    <h3 className="reportRatingCategory">Overall</h3>
                    <ReportStars 
                        hovered={hoveredOverall}
                        selected={selectedOverall}
                        setHovered={setHoveredOverall}
                        setSelected={setSelectedOverall}
                    />
                    <h3 className="reportRatingCategory">Food</h3>
                    <ReportStars 
                        hovered={hoveredFood}
                        selected={selectedFood}
                        setHovered={setHoveredFood}
                        setSelected={setSelectedFood}
                    />
                    <h3 className="reportRatingCategory">Service</h3>
                    <ReportStars 
                        hovered={hoveredService}
                        selected={selectedService}
                        setHovered={setHoveredService}
                        setSelected={setSelectedService}
                    />
                    <h3 className="reportRatingCategory">Ambience</h3>
                    <ReportStars 
                        hovered={hoveredAmbience}
                        selected={selectedAmbience}
                        setHovered={setHoveredAmbience}
                        setSelected={setSelectedAmbience}
                    />
                </div>
                <h3 className="reviewInstruct">Write a review</h3>
                <h4 className="reviewDescript">Help diners decide where to eat. Remember to keep it short, simple and specific.</h4>
                <textarea name="review" id="" cols="30" rows="1"
                    className="reviewText"
                    defaultValue={report ? report.review : ''}
                    onChange={e => setReview(e.target.value) }>
                </textarea>
                <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <button className="reportButton" type="submit">Submit</button>
            </form>

        </div>
    )
}