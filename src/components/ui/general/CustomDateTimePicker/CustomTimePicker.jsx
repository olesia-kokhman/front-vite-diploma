import React, {forwardRef, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimeButton = forwardRef(({date, onClick}, ref) => {
    return (
        <>
            <button className="date-button" onClick={onClick} ref={ref}>
                &lt; {date} &gt;
            </button>
        </>
    )
});

const CustomTimePicker = () => {
    const [selectedTime, setSelectedTime] = useState(new Date());
    return (
        <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="hh:mm aa"
        />
    );
};

export default CustomTimePicker;