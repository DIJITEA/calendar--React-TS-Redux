import { YearUpdate } from '../../store/actions/DateStorageLogic'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useEffect } from 'react'

function Year() {
    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(YearUpdate(new Date().getFullYear().toString())) })

    const yearDateObj = useAppSelector(state => state.DataR.value)
    console.log(yearDateObj)
    return (<div>
        <h1>{yearDateObj}</h1>
    </div>)
}
export default Year;