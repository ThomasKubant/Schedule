var now = moment().format("MMMM Do, YYYY");
var currentHour = moment().format("H");
var currentDateEl = $("#currentDay");
currentDateEl.text("Today is " + now);
console.log(currentHour);
if(currentHour < 9) {
    $("#9, #10, #11, #12, #1, #2, #3, #4, #5").addClass("future");
}
if(currentHour == 9) {
    $("#9").addClass("present");
    $("#10, #11, #12, #1, #2, #3, #4, #5").addClass("future");
}
if(currentHour == 10) {
    $("#9").addClass("past");
    $("#10").addClass("present");
    $("#11, #12, #1, #2, #3, #4, #5").addClass("future");
}
if(currentHour == 11) {
    $("#9, #10").addClass("past");
    $("#11").addClass("present");
    $("#12, #1, #2, #3, #4, #5").addClass("future");
}
if(currentHour == 12) {
    $("#9, #10, #11").addClass("past");
    $("#12").addClass("present");
    $("#1, #2, #3, #4, #5").addClass("future");
}
if(currentHour == 13) {
    $("#9, #10, #11, #12").addClass("past");
    $("#1").addClass("present");
    $("#2, #3, #4, #5").addClass("future");
}
if(currentHour == 14) {
    $("#9, #10, #11, #12, #1").addClass("past");
    $("#2").addClass("present");
    $("#3, #4, #5").addClass("future");
}
if(currentHour == 15) {
    $("#9, #10, #11, #12, #1, #2").addClass("past");
    $("#3").addClass("present");
    $("#4, #5").addClass("future");
}
if(currentHour == 16) {
    $("#9, #10, #11, #12, #1, #2, #3").addClass("past");
    $("#4").addClass("present");
    $("#5").addClass("future");
}
if(currentHour == 17) {
    $("#9, #10, #11, #12, #1, #2, #3, #4").addClass("past");
    $("#5").addClass("present");
}
if(currentHour > 17) {
    $("#9, #10, #11, #12, #1, #2, #3, #4, #5").addClass("past");
}