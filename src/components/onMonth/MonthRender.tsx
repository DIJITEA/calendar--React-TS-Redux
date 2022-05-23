import { useAppSelector, useAppDispatch } from '../../hooks'
import CurrentMonth from "./CurrentMoth";
import DayNames from "./DaysLine";
import Days from "./Days";
import GoToYear from './GoToYear';
import '../../assets/scss/onMonthScss/onMonth.scss'
function OnMonth() {
    const currentDate = [useAppSelector(state => state.DataR.value), useAppSelector(state => state.DataR.targetMonth)]
    console.log(currentDate[0] + '---' + currentDate[1])
    console.log(new Date(`${currentDate[1]} 1, ${currentDate[0]}`).getDay())
    return (<div className='monthRender monthRender__wrapper'>
        <GoToYear />
        <div className='monthRender__date-elements'>
            <CurrentMonth />
            <DayNames />
            <Days />
        </div>
    </div>)
}
export default OnMonth;