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
            </div>
        </li>
    )
}