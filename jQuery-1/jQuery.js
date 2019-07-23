/*
Q1:
Check if jQuery is loaded
*/

console.log("hello world")

/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$("a[href='#top']").click();


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

// var wiidth=width();
// var hight=heigth();
// var rest = rest();
// $("#btn2").click(){

//     $('#btn2').animate({height:'72px'}, 500);
// }
// $("#btn1").height(height);
// $('#btn1').animate({height:'72px'}, 500);


/*
Q4:
Learn how to fadein your boxes
*/
$(document).ready(function () {


    $("#butt1").click(function () {
        $("#p").fadeOut();

    })
    $("#butt").click(function () {
        $("#p").fadeIn();
    })

})

/*
Q5:
User must first accept then he or she can signup
*/

$("#accept").on("click", function () {
    $("#submitbtn").attr("disabled", !this.checked)
});

/*
Q6:
Let them print
*/
$(document).ready(function () {
    $("#pp").on("click", function () {
        window.print();
    })
})


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/

var maxLength = 20;
$('#rchars').text(20);
$('textarea').attr('maxLength', 20)
$('textarea').on('keyup', function () {
    var textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
});
/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$(document).ready(function(){
    $("#hello").on({
        mouseenter: function(){
        $(this).css({ "font-weight": "bold"});
        }
    });    
});


/*
Q9:
Add new div to your website
*/


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/


/*
Q12:
Know what user puts into textbox
*/


/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 