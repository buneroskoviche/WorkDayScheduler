// Use .moment() and setInterval to display the current date and time in the currentDay span
setInterval(() => {
    $("#currentDay").text(`It is ${moment().format("MMM Do, YYYY h:mm:ss")}`)
}, 1000);
