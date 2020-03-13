var time = $("#currentDay");
var blocks = $(".container");
// Variables that grab elements on the page.

time.text(moment().format("MMMM Do YYYY, h:mm a"));
// Changing the time on the page using moment.js

var hours = 9
var currentHour = moment().format("hA");
// Variables to be used for the timeblocks.
//=====================================================================================================================

var array0 = [];
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];
var array8 = [];
// Arrays that hold user-inputed text on each timeblock.
//=====================================================================================================================

function createRow() {

    for( var i = 0; i < hours; i++) {
// For Loop for dynamically creating each timeblock based on the work day hours.
        var newRow = $("<div>").addClass("row");

        blocks.append(newRow);

        var timeBlock = $("<div>").addClass("col-md-1 hour d-flex justify-content-center align-items-center");
        var list = $("<div>").addClass("col-md-10 time-block d-flex");
        var save = $("<div>").addClass("col-md-1 saveBtn d-flex justify-content-center align-items-center");

        newRow.append(timeBlock, list, save);
// Create and append each element of the timeblock, then append the new row created to the container div.

        var otherHour = moment('03-08-2020 9:00 AM', 'MM-DD-YYYY hh:mm A').add(i, "hours").format("hA");
// Variable for creating each hour moment, starting from 9am and adding 1 hour a total of 9 times.

        timeBlock.text(otherHour);
// Put the hours on the page dynamically.

        if (moment(otherHour, "hA").isSame(moment(currentHour, "hA"))) {
            list.addClass("present");
        } else if (moment(otherHour, "hA").isAfter(moment(currentHour, "hA"))) {
            list.addClass("future");
        } else {
            list.addClass("past");
        };
// Statements that make timeblocks change background-color based on what time of the day it is.

        var text = $("<textarea>").addClass("description flex-fill").addClass(otherHour +"-input");
        list.append(text);
// Create textarea tag for each timeblock and append to the list div. A class is added to each new textarea that has a unique name using variable "otherHour".

        var saveBtn = $("<button>").addClass("button-" +i).addClass("button")
        
        saveBtn.html("<img class=img src=assets/images/save.png>");
    // Add image to button using inner html jquery.
        save.append(saveBtn);
// Create button with a unique class using variable "i", and append each button to corresponding save div.
        

    };

};
createRow();
// Calling the function.

//=====================================================================================================================


$(document).on("click", ".button-0", Val0);
// Create event listener for save button on first new row created. Click will call function Val0.

function Val0() {

    array0 = [];
    var value0 = $(".9AM-input").val();
    array0.push(value0);
    storeVal0();
};
// Function to grab value of user-input in textarea and push that value into the corresponding array. Then calls function storeVal0.

function storeVal0() {

    localStorage.setItem("9am", JSON.stringify(array0));
};
// Function to store the value into local storage.

function grabVal0() {
    var local0 = JSON.parse(localStorage.getItem("9am"));
        array0 = local0;
    printVal0();
};
// Function for getting local storage value and settinf equal to the corresponding array. Then calls function printVal0.
grabVal0();
// Calling that function.

function printVal0() {
    $(".9AM-input").val(array0);
};
// Function for setting textarea value equal to the value of the corresponding array.

//=====================================================================================================================

// Each function repeats the steps previously stated above, which number variation to match each timeblock.
$(document).on("click", ".button-1", Val1);

function Val1() {

    array1 = [];
    var value1 = $(".10AM-input").val();
    array1.push(value1);
    storeVal1();
};

function storeVal1() {

    localStorage.setItem("10am", JSON.stringify(array1));
};

function grabVal1() {
    var local1 = JSON.parse(localStorage.getItem("10am"));
        array1 = local1;
    printVal1();
};
grabVal1();

function printVal1() {
    $(".10AM-input").val(array1);
};

//================================================================================================================

$(document).on("click", ".button-2", Val2);

function Val2() {

    array2 = [];
    var value2 = $(".11AM-input").val();
    array2.push(value2);
    storeVal2();
};

function storeVal2() {

    localStorage.setItem("11am", JSON.stringify(array2));
};

function grabVal2() {
    var local2 = JSON.parse(localStorage.getItem("11am"));
        array2 = local2;
    printVal2();
};
grabVal2();

function printVal2() {
    $(".11AM-input").val(array2);
};

//================================================================================================================

$(document).on("click", ".button-3", Val3);

function Val3() {

    array3 = [];
    var value3 = $(".12PM-input").val();
    array3.push(value3);
    storeVal3();
};

function storeVal3() {

    localStorage.setItem("12pm", JSON.stringify(array3));
};

function grabVal3() {
    var local3 = JSON.parse(localStorage.getItem("12pm"));
        array3 = local3;
    printVal3();
};
grabVal3();

function printVal3() {
    $(".12PM-input").val(array3);
};

//================================================================================================================

$(document).on("click", ".button-4", Val4);

function Val4() {

    array4 = [];
    var value4 = $(".1PM-input").val();
    array4.push(value4);
    storeVal4();
};

function storeVal4() {

    localStorage.setItem("1pm", JSON.stringify(array4));
};

function grabVal4() {
    var local4 = JSON.parse(localStorage.getItem("1pm"));
        array4 = local4;
    printVal4();
};
grabVal4();

function printVal4() {
    $(".1PM-input").val(array4);
};

//================================================================================================================

$(document).on("click", ".button-5", Val5);

function Val5() {

    array5 = [];
    var value5 = $(".2PM-input").val();
    array5.push(value5);
    storeVal5();
};

function storeVal5() {

    localStorage.setItem("2pm", JSON.stringify(array5));
};

function grabVal5() {
    var local5 = JSON.parse(localStorage.getItem("2pm"));
        array5 = local5;
    printVal5();
};
grabVal5();

function printVal5() {
    $(".2PM-input").val(array5);
};

//================================================================================================================

$(document).on("click", ".button-6", Val6);

function Val6() {

    array6 = [];
    var value6 = $(".3PM-input").val();
    array6.push(value6);
    storeVal6();
};

function storeVal6() {

    localStorage.setItem("3pm", JSON.stringify(array6));
};

function grabVal6() {
    var local6 = JSON.parse(localStorage.getItem("3pm"));
        array6 = local6;
    printVal6();
};
grabVal6();

function printVal6() {
    $(".3PM-input").val(array6);
};

//================================================================================================================

$(document).on("click", ".button-7", Val7);

function Val7() {

    array7 =[];
    var value7 = $(".4PM-input").val();
    array7.push(value7);
    storeVal7();
};

function storeVal7() {

    localStorage.setItem("4pm", JSON.stringify(array7));
};

function grabVal7() {
    var local7 = JSON.parse(localStorage.getItem("4pm"));
        array7 = local7;
    printVal7();
};
grabVal7();

function printVal7() {
    $(".4PM-input").val(array7);
};

//================================================================================================================


$(document).on("click", ".button-8", Val8);

function Val8() {

    array8 = [];
    var value8 = $(".5PM-input").val();
    array8.push(value8);
    storeVal8();
};

function storeVal8() {

    localStorage.setItem("5pm", JSON.stringify(array8));
};

function grabVal8() {
    var local8 = JSON.parse(localStorage.getItem("5pm"));
        array8 = local8;
    printVal8();
};
grabVal8();

function printVal8() {
    $(".5PM-input").val(array8);
};



