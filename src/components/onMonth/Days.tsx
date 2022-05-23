import { useAppSelector, useAppDispatch } from '../../hooks'

function Days() {
    const currentDate = [useAppSelector(state => state.DataR.value), useAppSelector(state => state.DataR.targetMonth)]
    const firstMonthDay = () => {
        let Num = new Date(`${currentDate[1]} 1, ${currentDate[0]}`).getDay()
        let returnNum = (Num == 0 ? 6 : Num - 1)
        return returnNum
    }
    const currentMonthNum = new Date(`${currentDate[1]} 1, ${currentDate[0]}`).getMonth()
    const monthDays = new Date(parseInt(currentDate[0]), currentMonthNum + 1, 0).getDate()
    const DateReturn = (i: number) => {
        if (i >= firstMonthDay() && i <= monthDays + firstMonthDay() - 1) {
            return <h2 className='days__param'> {i + 1 - firstMonthDay()} </h2>
        }
        return ''
    }
    const divStyle = {
        backgroundColor: 'black',
        color: 'white',
        width: '100px',
        height: '100px',
        margin: '10px'
    }
    return (<div className='days'>
        <div className='days__wrapper'>
            {
                [...Array(42)].map((e, i) =>
                    <div key={i} className='days__item'>
                       {DateReturn(i)}
                    </div>)
            }
        </div>
    </div>
    )
}
export default Days