import { monthTargetUpdate } from '../../store/actions/DateStorageLogic'
import { appStateUpdate } from '../../store/actions/AppPseudoRender'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useEffect, useState } from 'react'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function Months() {
    const dispatch = useAppDispatch()
    const currentMonthName = useAppSelector(state => state.DataR.targetMonth)
    useEffect(() => { getMoth }, [currentMonthName])
    function getMoth(e: number) {
        dispatch(monthTargetUpdate(monthNames[e]))
        dispatch(appStateUpdate('month'))
    }

    return (<div className='months'>
        <div className='months__wrapper'>
            {[...Array(monthNames.length)].map((e, i) =>
                <button
                    className='months__button'
                    key={i}
                    onClick={() => getMoth(i)}>
                    <h2 className='months__header'>{monthNames[i]}</h2>
                </button>)}
        </div>
    </div>
    )
}

export default Months