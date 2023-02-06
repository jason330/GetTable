export default function ReportListItem( {report} ) {
    return(
        <li>
            <div>
                {report.userId}
            </div>
            <div>
                <div>
                    Dined on {report.reservationDate}
                </div>
                <div>
                    <div>Overall</div>
                    <div>{report.ratingOverall}</div>
                    <div>Food</div>
                    <div>{report.ratingFood}</div>
                    <div>Service</div>
                    <div>{report.ratingService}</div>
                    <div>Ambience</div>
                    <div>{report.ratingAmbience}</div>
                </div>
                <div>
                    {report.review}
                </div>
            </div>
        </li>
    )
}