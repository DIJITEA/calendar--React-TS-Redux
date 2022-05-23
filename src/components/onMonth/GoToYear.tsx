import { appStateUpdate } from '../../store/actions/AppPseudoRender'
import { useAppSelector, useAppDispatch } from '../../hooks'

function GoToYear() {
    const dispatch = useAppDispatch()
    function goBack() {

        dispatch(appStateUpdate('year'))
    }
    return (<div><button onClick={() => goBack()}>Back to year</button></div>)
}

export default GoToYear