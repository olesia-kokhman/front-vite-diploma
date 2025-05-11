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

const CustomPeriodPicker = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
                customInput={<DateButton/>}/>

        </>
    );
}

export default CustomPeriodPicker;