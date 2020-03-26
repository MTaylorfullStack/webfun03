// console.log("hello world");
// var num = 0;

// function hello() {
//     num += 1;
//     console.log("You have said hello "+ num +" times")
// }
// for(var i=0; i<11; i++) {
//     $("#head").hide(1000, function () {
//         console.log("I have hidden your header!");
//         $("#head").show();
//     })
// }

var hidden = false;

$(".myclass").click(function () {
    // console.log("Test that my listener is listening!")
    if(hidden == true) {
        $("h3").show()
        hidden = false;
    } else {
        hidden = true;
        $("h3").hide();
    }
    console.log($("this"));
});












