let currentDay;
let currentHour;


let rowHour;
let rowIdStr;
let input; 
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



// Array.from(rows).forEach(function(row) {
//     rowIdStr = row.id;
//     console.log(row);
//     console.log(rowIdStr);
    
//     if (rowIdStr) {
//         rowHour = parseInt(rowIdStr);
//         console.log(rowHour);
//     }
//     if (rowHour) {
//         if ((currentHour > rowHour) && (currentHour < rowHour + 9)) {
//             $("input").attr("class", "col-8 past");
//         } else if (currentHour === rowHour) {
//            $("input").attr("class", "col-8 present");
//         } else if ((currentHour < rowHour) && (currentHour > rowHour - 9)) {
//             $("input").attr("class", "col-8 future")
//         }    
//     }
// })


button.on("click", function() {
    console.log(this);
    // let store = input.value
    // localStorage.setItem(, store);     
})
