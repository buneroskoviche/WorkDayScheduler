// Use .moment() to get the current day, and put it in the currentDay span
$("#currentDay").text(`Today is ${moment().format("MMM Do, YYYY")}`)