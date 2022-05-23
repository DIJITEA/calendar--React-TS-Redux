import { YearUpdate } from '../../store/actions/DateStorageLogic'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useEffect } from 'react'

function Year() {
    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(YearUpdate(new Date().getFullYear().toString())) })

    const yearDateObj = useAppSelector(state => state.DataR.value)
    return (
        <div className='year'>
            <div className='year__wrapper'>
                <h1 className='year__header'>{yearDateObj}</h1>
            </div>
        </div>
    )
}
export default Year;