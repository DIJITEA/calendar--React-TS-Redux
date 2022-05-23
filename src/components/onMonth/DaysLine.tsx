const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function DayNames() {
    return (<div className='dayNames'>
        <div className='dayNames__wrapper'>
            {[...Array(dayNames.length)].map((e, i) => <div className='dayNames__item' key={i}><h2 className='dayNames__header'>{dayNames[i]}</h2></div>)}
        </div>
    </div>
    )
}
export default DayNames