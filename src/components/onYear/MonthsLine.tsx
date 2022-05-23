import { monthTargetUpdate } from '../../store/actions/DateStorageLogic'
import { appStateUpdate } from '../../store/actions/AppPseudoRender'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useEffect } from 'react'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function Months() {
    const dispatch = useAppDispatch()
    const currentMonthName = useAppSelector(state => state.DataR.targetMonth)
    useEffect(() => { getMoth }, [currentMonthName])
    function getMoth(e: number) {
        dispatch(monthTargetUpdate(monthNames[e]))
        dispatch(appStateUpdate('month'))
    }

    return (<div>
        {[...Array(monthNames.length)].map((e, i) => <button key={i} onClick={() => getMoth(i)}>{monthNames[i]}</button>)}
    </div>
    )
}

export default Months