import './DateFormat.scss'
import React from 'react';
import moment from 'moment'

const format='DD MMMM YYYY HH:mm'
const DateFormat = ({date}) => (
    <time className="date-format">{moment(new Date(date)).format(format)}</time>
)

export default DateFormat;
