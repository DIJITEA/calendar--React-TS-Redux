import { useAppSelector, useAppDispatch } from '../hooks'

import OnYear from './onYear/YearRender';
import OnMonth from './onMonth/MonthRender'


function RenderSwitch() {
    const isLoggedIn = useAppSelector(state => state.AppS.value);
    switch (isLoggedIn) {
        case 'year':
            return <div>
                <OnYear />
            </div>;
        case 'month':
            return <div>
                <OnMonth />
            </div>;
        default:
            return <h2>2</h2>;
    }
}


function SwitcherRender() {
    return <div>
        <RenderSwitch />
    </div>
}
export default SwitcherRender