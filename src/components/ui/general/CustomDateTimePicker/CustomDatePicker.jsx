import React, {forwardRef, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateButton = forwardRef(({date, onClick}, ref) => {
    return (
        <>
            <button className="date-button" onClick={onClick} ref={ref}>
                &lt; {date} &gt;
            </button>
        </>
    )
});

const CustomDatePicker = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <>
            <DatePicker showIcon
                        toggleCalendarOnIconClick
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd MMM,yyyy"
                        customInput={<DateButton/>}/>
        </>
    );
}

export default CustomDatePicker;