const test = require('ava');
const {DateTime} = require('luxon');

const dateCompare = require('../src/index');

test('Should return mayor', t => {
    const startStr = '02-03-2021';
    const endStr = '02-03-2022';
    const startDate = DateTime.fromFormat(startStr, 'dd-MM-yyyy');
    const endDate = DateTime.fromFormat(endStr, 'dd-MM-yyyy');
    const result = dateCompare(startStr, endStr);
    t.deepEqual(result, {startDate, endDate});
    });
   
    
