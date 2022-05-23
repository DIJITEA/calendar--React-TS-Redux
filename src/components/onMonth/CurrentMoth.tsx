import { useAppSelector, useAppDispatch } from '../../hooks'

function CurrentMonth() {
    const currentMonthName = useAppSelector(state => state.DataR.targetMonth)
    return (
        <div className='month'>
            <div className='month__wrapper'>
                <h2 className='month__header'>{currentMonthName}</h2>
            </div>
        </div>
    )
}

export default CurrentMonth