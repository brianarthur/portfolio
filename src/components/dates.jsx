import React from 'react';
import { dateString } from '../lib/date'

const Dates = ({ startDate, endDate }) => {
    let start = dateString(startDate);
    let end = dateString(endDate);

    if (start === end) return end;
    else return `${start} - ${end}`;
}

export default Dates;