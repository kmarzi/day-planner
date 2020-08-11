var m = moment();
var currentDay = m.format('dddd, MMMM Do, YYYY');
$("#currentDay").text(currentDay);

// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
