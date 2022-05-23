import Year from "./YearLine";
import Months from "./MonthsLine";
import '../../assets/scss/onYearScss/onYear.scss'
function OnYear() {
    return (<div className="yearRender yearRender__wrapper">
        <Year />
        <Months />
    </div>)
}
export default OnYear;