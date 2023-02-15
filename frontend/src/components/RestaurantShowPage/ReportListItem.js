export default function ReportListItem( {report} ) {
    return(
        <li className="reportLi">
            <div className="reportUser">
                { report.username ? report.username : 'GetTable Diner' + report.userId }
            </div>
            <div>
                <div className="reportDineDate">
                    Dined on {report.reservationDate}
                </div>
                <div className="reportRatings">
                    <div className="ratingCategory">Overall</div>
                    <div className="userRating">{report.ratingOverall}</div>
                    <div className="ratingCategory">Food</div>
                    <div className="userRating">{report.ratingFood}</div>
                    <div className="ratingCategory">Service</div>
                    <div className="userRating">{report.ratingService}</div>
                    <div className="ratingCategory">Ambience</div>
                    <div className="userRating">{report.ratingAmbience}</div>
                </div>
                <div className="reportReview">
                    {report.review}
                </div>
            </div>
        </li>
    )
}