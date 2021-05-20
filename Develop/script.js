const timeOfDay = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00"
];

const $container = $('.container');

for (let i = 0; i < timeOfDay.length; i++) {
    const $timeBlock = $('<div>').addClass('row time-block');
    const $inputGroup = $('<div>').addClass('input-group');
    const $hour = $('<p>').addClass('hour col-1').text(timeOfDay[i]);
    const $textArea = $('<textarea>').addClass('form-control col-10');
    const $button = $('<button>').addClass('btn saveBtn col-1');
    $inputGroup.append($hour).append($textArea).append($button);
    $timeBlock.append($inputGroup);
    $container.append($timeBlock);
}

// Use .moment() and setInterval to display the current date and time in the currentDay span
setInterval(() => {
    $("#currentDay").text(`${moment().format("h:mm:ss A, dddd, MMM Do, YYYY")}`)
}, 1000);
