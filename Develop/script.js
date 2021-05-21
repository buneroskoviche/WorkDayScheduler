const timeOfDay = [
    {time: "9:00", value: 9},
    {time: "10:00", value: 10},
    {time: "11:00", value: 11},
    {time: "12:00", value: 12},
    {time: "1:00", value: 13},
    {time: "2:00", value: 14},
    {time: "3:00", value: 15},
    {time: "4:00", value: 16},
    {time: "5:00", value: 17},
];

// Get the .container div and save in a variable
const $container = $('.container');
// Use a loop to create time slots for each item in the timeOfDay array
for (let i = 0; i < timeOfDay.length; i++) {
    const $timeBlock = $('<div>').addClass('row time-block');
    const $inputGroup = $('<div>').addClass('input-group');
    const $hour = $('<p>').addClass('hour col-1').text(timeOfDay[i].time);
    const $textArea = $('<textarea>').addClass('form-control col-10');
    if (timeOfDay[i].value === moment().hour()) {
        $textArea.addClass('present');
    } else if (timeOfDay[i].value > moment().hour()) {
        $textArea.addClass('future');
    } else {
        $textArea.addClass('past');
    }
    const $button = $('<button>').addClass('btn saveBtn col-1');
    $inputGroup.append($hour).append($textArea).append($button);
    $timeBlock.append($inputGroup);
    $container.append($timeBlock);
}

// Use .moment() and setInterval to display the current date and time in the currentDay span
setInterval(() => {
    $("#currentDay").text(`${moment().format("h:mm:ss A, dddd, MMM Do, YYYY")}`)
}, 1000);
