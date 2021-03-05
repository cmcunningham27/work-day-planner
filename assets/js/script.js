//Declares variables for elements or ones that will be used later in the code
let currentDay = $("#currentDay");
let button = $(".saveBtn");
let timeBlock = $(".time-block");
let currentHour; 
let rowHour;

//Prints date immediatelly in the jumbotron upon opening DOM
currentDay.text(moment().format("dddd MMMM Do"));

//when the user clicks on a row's button to save their event, this will log their event and the corresponding time to their local storage
button.on("click", function() {
    let text = $(this).siblings("textarea").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);  
});

//gets events that were logged in local storage previously and prints them on the DOM in their corresponding rows
$("#9AM textarea").val(localStorage.getItem("9AM"));
$("#10AM textarea").val(localStorage.getItem("10AM"));
$("#11AM textarea").val(localStorage.getItem("11AM"));
$("#12PM textarea").val(localStorage.getItem("12PM"));
$("#13PM textarea").val(localStorage.getItem("13PM"));
$("#14PM textarea").val(localStorage.getItem("14PM"));
$("#15PM textarea").val(localStorage.getItem("15PM"));
$("#16PM textarea").val(localStorage.getItem("16PM"));
$("#17PM textarea").val(localStorage.getItem("17PM"));

//Styles each rown with a color to indicate whether it is a past hour, the present hour, or a future hour
function background(){
    //loop for each row
    timeBlock.each(function(){
        //turns id into an integer
        rowHour = parseInt($(this).attr("id"));
        //turns time into an integer
        currentHour = parseInt(moment().format("H"));
        if (currentHour > rowHour) {
            $(this).addClass("past");
        } else if (currentHour === rowHour) {
            $(this).addClass("present");
        }else {
            $(this).addClass("future");
        }  
    })
}
//calls the function to apply colors to each row
background();