import React from 'react';
import DatePicker from 'react-date-picker';
import Radios from './Radios.js';

const RadioDatePicker = () => {
    return (
        <div className="subcomp">
            <Radios/>
            <DatePicker />
        </div>
    )
}

export default RadioDatePicker;