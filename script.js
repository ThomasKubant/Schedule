var now = moment().format("MMMM Do, YYYY");
var currentHour = moment().format("H");
var currentDateEl = $("#currentDay");
var idCounter = 9;
currentDateEl.text("Today is " + now);
// COLOR CODING BASED ON HOUR OF DAY
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
// TEXT EDITING
$(".col-10").on("click", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("description")
    .val(text);
    $(this).find("p").replaceWith(textInput);
    textInput.trigger("focus");
})
$(".col-10").on("blur", "textarea", function() {
    var text = $(this)
    .val()
    .trim();
    var newText = $("<p>")
    .addClass("description")
    .text(text);
    $(this).replaceWith(newText)
});
$("button").on("click", function() {
    var text = $(this).parent().parent().find("p").text();
    var hour = $(this).parent().prev().attr('id');
    console.log(text);
    console.log(hour);
    localStorage.setItem(hour, text);
})
for(i = 0; i < 9; i++) {
    var text = $("#" + idCounter).text();
    var savedText = localStorage.getItem(idCounter);
    $("#" + idCounter).find("p").text(savedText);
    idCounter++;
    if(idCounter > 12) {
        idCounter = 1;
    }
    console.log(savedText);
}