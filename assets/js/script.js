let currentDay;
let currentHour;


let rowHour;
let rowIdStr;
let rows = $(".row");
let button = $(".saveBtn");
let h4 = $(".hour")
console.log(rows);

//creates a seconds interval, keeps track of hour every second, and prints the date on the DOM
setInterval(function(){
    //After the HTML and CSS have been loaded and the DOM is now ready for the Javascript code to execute
    $(document).ready(function() {
        currentDay = $("#currentDay");
        currentDay.text(moment().format("dddd MMMM Do"));
        currentHour = moment().format("H");
        console.log(currentHour);
    })
}, 1000);

//when the user clicks on a row's button to save their event, this will log their event and the corresponding time to their local storage
button.on("click", function() {
    let text = $(this).siblings("textarea").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);  
});

//gets events that were logged in local storage and puts them in their corresponding rows
$("#9AM textarea").val(localStorage.getItem("9AM"));
$("#10AM textarea").val(localStorage.getItem("10AM"));
$("#11AM textarea").val(localStorage.getItem("11AM"));
$("#12PM textarea").val(localStorage.getItem("12PM"));
$("#1PM textarea").val(localStorage.getItem("1PM"));
$("#2PM textarea").val(localStorage.getItem("2PM"));
$("#3PM textarea").val(localStorage.getItem("3PM"));
$("#4PM textarea").val(localStorage.getItem("4PM"));
$("#5PM textarea").val(localStorage.getItem("5PM"));

//
function trackTime(){

}