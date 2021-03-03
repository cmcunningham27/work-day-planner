let currentDay;
let currentHour;


let rowHour;
let rowIdStr;
let rows = $(".row");
let button = $(".saveBtn");
let h4 = $(".hour")
console.log(rows);
 

const update = function() {
    const today = moment();
    currentDay.text(today.format("dddd MMMM Do"));
    currentHour = moment().format("H");
    // console.log(currentHour);
}

setInterval(function(){
    $(document).ready(function() {
        currentDay = $("#currentDay");
        update();

    })
}, 1000);


button.on("click", function() {
    let text = $(this).siblings("#input").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);  
});
