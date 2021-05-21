const $container = $('.container');
const savedPlans = [];
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

// Use .moment() and setInterval to display the current date and time in the currentDay span
setInterval(() => {
    $("#currentDay").text(`${moment().format("h:mm:ss A, dddd, MMM Do, YYYY")}`)
}, 1000);

// Get saved data from local storage and push into an array
const storedPlans = JSON.parse(localStorage.getItem('plans'));
if (storedPlans !== null) {
    for (let i =0; i < storedPlans.length; i++) {
        savedPlans.push(storedPlans[i])}};
console.log(savedPlans);

// Use a loop to create time slots for each item in the timeOfDay array
for (let i = 0; i < timeOfDay.length; i++) {
    // Declare variables containing html elements
    const $timeBlock = $('<div>').addClass(`row time-block`).attr('id', timeOfDay[i].value);
    const $inputGroup = $('<div>').addClass('input-group');
    const $hour = $('<p>').addClass('hour col-1').text(timeOfDay[i].time);
    const $textArea = $('<textarea>').addClass(`form-control col-10`);
    const $button = $('<button>').addClass('btn saveBtn col-1').text('💾');
    // Use if to determine the time of day and change the color of the input box
    if (timeOfDay[i].value === moment().hour()) {
        $textArea.addClass('present');
    } else if (timeOfDay[i].value > moment().hour()) {
        $textArea.addClass('future');
    } else {
        $textArea.addClass('past');
    }
    // Give the button a click listener to save the input
    $button.on('click', function(event) {
        event.preventDefault();
        const newPlan = {
            input: $inputGroup.children('textarea').val(),
            slot: $inputGroup.parent().attr('id')};
        savedPlans.push(newPlan);
        console.log(savedPlans);
        localStorage.setItem("plans", JSON.stringify(savedPlans));
    });
    // Append the elements to each other, then the page
    $inputGroup.append($hour).append($textArea).append($button);
    $timeBlock.append($inputGroup);
    $container.append($timeBlock);
    // Load any saved values into the text area
    for (let i = 0; i < savedPlans.length; i++) {
        if ($inputGroup.parent().attr('id') === savedPlans[i].slot) {
            $textArea.val(savedPlans[i].input);
        }
    }
};