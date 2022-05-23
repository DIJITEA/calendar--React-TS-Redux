const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function DayNames() {
    return (<div>
        {[...Array(dayNames.length)].map((e, i) => <div key={i}><h2>{dayNames[i]}</h2></div>)}
    </div>
    )
}
export default DayNames