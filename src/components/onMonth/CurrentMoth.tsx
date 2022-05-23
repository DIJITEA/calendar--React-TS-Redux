import { useAppSelector, useAppDispatch } from '../../hooks'
function CurrentMonth() {
    const currentMonthName = useAppSelector(state => state.DataR.targetMonth)
    return (
        <div>
            <h2>{currentMonthName}</h2>
        </div>
    )
}

export default CurrentMonth