const {DateTime} = require('luxon');

function dateCompare(dateStr1, dateStr2) {
    const date1 = DateTime.fromFormat(dateStr1, 'dd-MM-yyyy');
    const date2 = DateTime.fromFormat(dateStr2, 'dd-MM-yyyy');
    if(date1.ts>date2.ts) return {startDate: date2, endDate: date1};
    if(date1.ts<date2.ts) return {startDate: date1, endDate: date2};
}

module.exports = dateCompare;