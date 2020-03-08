
var time = $("#currentDay");
var blocks = $(".container");

time.text(moment().format('MMMM Do YYYY, h:mm a'));


var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
function createRow() {

var currentHour = parseInt(moment().format("h"));

    for( var i = 0; i < hours.length; i++) {

        var newRow = $("<div>").addClass("row time-block");

        var timeBlock = $("<div>").addClass("col-md-1 hour d-flex justify-content-center align-items-center");
        var list = $("<div>").addClass("col-md-10 description");
        var save = $("<div>").addClass("col-md-1 saveBtn");

        if (i < 3) {
            timeBlock.text(hours[i] + "AM");
        } else {
            timeBlock.text(hours[i] + "PM");
        }

        if (hours[i] === currentHour ) {
            list.addClass("present");
        } else if (hours[i] < currentHour) {
            list.addClass("past");
        } else if (hours[i] > currentHour) {
            list.addClass("future");
        };

        blocks.append(newRow);
        newRow.append(timeBlock, list, save);
    };

};

createRow();
