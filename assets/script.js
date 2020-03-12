var time = $("#currentDay");
var blocks = $(".container");

time.text(moment().format("MMMM Do YYYY, h:mm a"));


var hours = 9
var currentHour = moment().format("hA");

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

//=====================================================================================================================

function createRow() {

    for( var i = 0; i < hours; i++) {

        var newRow = $("<div>").addClass("row");

        blocks.append(newRow);

        var timeBlock = $("<div>").addClass("col-md-1 hour d-flex justify-content-center align-items-center");
        var list = $("<div>").addClass("col-md-10 time-block d-flex");
        var save = $("<div>").addClass("col-md-1 saveBtn d-flex justify-content-center align-items-center");

        newRow.append(timeBlock, list, save);

        var otherHour = moment('03-08-2020 9:00 AM', 'MM-DD-YYYY hh:mm A').add(i, "hours").format("hA");

        timeBlock.text(otherHour);

        if (moment(otherHour, "hA").isSame(moment(currentHour, "hA"))) {
            list.addClass("present");
        } else if (moment(otherHour, "hA").isAfter(moment(currentHour, "hA"))) {
            list.addClass("future");
        } else {
            list.addClass("past");
        };

        var text = $("<textarea>").addClass("description flex-fill").addClass(otherHour +"-input");
        list.append(text);

        var saveBtn = $("<button>").addClass("button-" +i).addClass("button");
        saveBtn.text("Save");
        save.append(saveBtn);

        

    };

};
createRow();

//=====================================================================================================================


$(document).on("click", ".button-0", grabVal0);

function grabVal0() {

    array0 = [];
    var value0 = $(".9AM-input").val();
    array0.push(value0);
    localStorage.setItem("9am", array0);
    
    console.log(value0);
};



    
//=====================================================================================================================


//=====================================================================================================================

$(document).on("click", ".button-1", grabVal1);

function grabVal1() {

    array1 = [];
    var value1 = $(".10AM-input").val();
    array1.push(value1);
    localStorage.setItem("10am", array1);
};

//================================================================================================================

$(document).on("click", ".button-2", grabVal2);

function grabVal2() {

    array2 = [];
    var value2 = $(".11AM-input").val();
    array2.push(value2);
    localStorage.setItem("11am", array2);
};

//================================================================================================================

$(document).on("click", ".button-3", grabVal3);

function grabVal3() {

    array3 = [];
    var value3 = $(".12PM-input").val();
    array3.push(value3);
    localStorage.setItem("12pm", array3);
};

//================================================================================================================

$(document).on("click", ".button-4", grabVal4);

function grabVal4() {

    array4 = [];
    var value4 = $(".1PM-input").val();
    array4.push(value4);
    localStorage.setItem("1pm", array4);
};

//================================================================================================================

$(document).on("click", ".button-5", grabVal5);

function grabVal5() {

    array5 = [];
    var value5 = $(".2PM-input").val();
    array5.push(value5);
    localStorage.setItem("2pm", array5);
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
}
grabVal6();

function printVal6() {
    $(".3PM-input").val(array6);
}

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
}
grabVal7();

function printVal7() {
    $(".4PM-input").val(array7);
}

//================================================================================================================


$(document).on("click", ".button-8", grabVal8);

function grabVal8() {

    array8 = [];
    var value8 = $(".5PM-input").val();
    array8.push(value8);
    localStorage.setItem("5pm", array8);
    console.log();
};




