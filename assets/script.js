//make variables:

var moment = moment();
var currentDay = moment.format('dddd, MMMM Do, YYYY');
$("#currentDay").text(currentDay);

//make on clicks
$("button").on("click", function(){
    var userInput = $(this).siblings(".description").val();
    if(userInput !== "") {
        var mainRow = $(this).parent().attr("id");
        savedTask(userInput, mainRow);
    }
});
function savedTask() {
    $("div").each(function(index, value){
        var divId = this.id;
        if(divId.includes("time")) {
            var savedInfo = window.localStorage.getItem(divId)
            if(savedinfo != null) {
                $(this).children(".description").val(savedInfo)
            }
        }
    });
    function getSetColors(){
        $("div").each(function(index, value){
            var divId = this.id;
            if(divId.includes("time")){
                var divTime =parseInt(divId);
            }
        })
    }














//call the functions:
savedTask();
