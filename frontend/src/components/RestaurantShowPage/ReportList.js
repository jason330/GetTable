import ReportListItem from "./ReportListItem";

export default function ReportList( {restaurantReportsArray} ) {
    return(
        <ul>
            {restaurantReportsArray.map(report =>
            <ReportListItem
                key={report.id}
                report={report}
            />)
            }
        </ul>
    )
}