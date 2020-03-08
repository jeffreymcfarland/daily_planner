var time = $("#currentDay");
var blocks = $(".container");

time.text(moment().format("MMMM Do YYYY, h:mm a"));


var hours = 9
var currentHour = moment().format("hA");

function createRow() {

    for( var i = 0; i < hours; i++) {

        var newRow = $("<div>").addClass("row");

        var timeBlock = $("<div>").addClass("col-md-1 hour d-flex justify-content-center align-items-center");
        var list = $("<div>").addClass("col-md-10 time-block d-flex");
        var save = $("<div>").addClass("col-md-1 saveBtn d-flex justify-content-center align-items-center");

        var otherHour = moment('03-08-2020 9:00 AM', 'MM-DD-YYYY hh:mm A').add(i, "hours").format("hA");

        timeBlock.text(otherHour);

        if (moment(otherHour, "hA").isSame(moment(currentHour, "hA"))) {
            list.addClass("present");
        } else if (moment(otherHour, "hA").isAfter(moment(currentHour, "hA"))) {
            list.addClass("future");
        } else {
            list.addClass("past");
        };

        var saveBtn = $("<button>").text("Save");
        save.append(saveBtn);

        var text = $("<textarea>").addClass("description flex-fill");
        list.append(text);

        blocks.append(newRow);
        newRow.append(timeBlock, list, save);

        

    };

};

createRow();

// var active_time = moment.utc('2015-06-04T15:00Z', 'YYYY-MM-DD[T]HH:mm[Z]');
// var current_time = moment.utc('2015-06-04T16:00Z', 'YYYY-MM-DD[T]HH:mm[Z]');

// console.log('active_time =',active_time.format());
// console.log('current_time =',current_time.format());
// console.log( active_time.isAfter(current_time) );



