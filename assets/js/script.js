let currentDay = $("#currentDay");
let currentHour; 
let rowHour;
let button = $(".saveBtn");
 
//Allows the DOM to keep track of the date and hour every second the user is on the website 
const update = function() {
    currentHour = parseInt(moment().format("H"));
    console.log(currentHour);
    function background(){
        $(".time-block").each(function(){
            // console.log($(this).attr("id"));
            rowHour = parseInt($(this).attr("id"));
            // console.log(rowHour);
            // currentHour = parseInt(moment().format("H"));
            // console.log(currentHour);
            if (currentHour > rowHour) {
                $(this).addClass("past");
            } else if (currentHour === rowHour) {
                $(this).addClass("present");
            }else {
                $(this).addClass("future");
            }  
        })
        
    }
    background();
}

//creates a second interval and calls the update function
setInterval(function(){
    //After the HTML and CSS have been loaded and the DOM is now ready for the Javascript code to execute
    $(document).ready(function() {
    //     currentDay = $("#currentDay");
    //     // const today = moment();
    // currentDay.text(moment().format("dddd MMMM Do"));
        update();

    })
}, 1000);
        

currentDay.text(moment().format("dddd MMMM Do"));

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
$("#13PM textarea").val(localStorage.getItem("13PM"));
$("#14PM textarea").val(localStorage.getItem("14PM"));
$("#15PM textarea").val(localStorage.getItem("15PM"));
$("#16PM textarea").val(localStorage.getItem("16PM"));
$("#17PM textarea").val(localStorage.getItem("17PM"));

//
// function background(){
//     $(".time-block").each(function(){
//         // console.log($(this).attr("id"));
//         rowHour = parseInt($(this).attr("id"));
//         // console.log(rowHour);
//         currentHour = parseInt(moment().format("H"));
//         // console.log(currentHour);
//         if (currentHour > rowHour) {
//             $(this).addClass("past");
//         } else if (currentHour === rowHour) {
//             $(this).addClass("present");
//         }else {
//             $(this).addClass("future");
//         }  
//     })
    
// }
// background();