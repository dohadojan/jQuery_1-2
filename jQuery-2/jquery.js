// EXERCISE 1: Change Background
// Change the background color of '#target' by script. 

// $("#target").css("background-color","red");
// EXERCISE 2: Change Parent
// Change the text in the span, a child of "#target"

// $('#target span').text('a child of "#target"');


// EXERCISE 3: Create Clone
// Create a clone of the span in "#target" and position it under the origin.

// $(document).ready(function(){
// $("span").clone().insertAfter( "span" ).css({
// position:"absolute",
// left:-20,
// margin:80,

// }) })




// EXERCISE 4: Use Filter
// Change background color of the second ".target"
// $( "div" ).filter( ":odd" ).css( "background-color", "red" );



// EXERCISE 5: Disable Buttons
// Disable the button

// $("button").attr("disabled","disabled")


// EXERCISE 6: Uncheck CheckBoxes
// Uncheck all checkboxes using jQuery
// $(document).ready(function(){
//     $('input').removeAttr("checked");});

// EXERCISE 7: Change Parent
// Move "#child" from "#parent1" to "#parent2"

//    $("#child").appendTo('#parent2');
   
// EXERCISE 8: Select A Option in A Select Box
// Select the second option in the selectbox by script

// $(document).ready(function(){
//     $("option").eq(1).attr("selected","true")
    
// })

// EXERCISE 9: Change Size
// Make "#target" double s$( "div" ). function() {
//     $(document).ready(function(){
//     var height = $("#target").height();
//     var width = $("#target").width();
        
// $("#target").width(width*2);
// $("#target").height(height*2);
//     });

// EXERCISE 10: Empty Elements
// Remove all children and text of "#target"
// $(document).ready(function(){
// $("#target").empty();});


// Advanced part
// EXERCISE 11: Delay
// Show Alert with 1 second delay (Use "setTimeout")



// EXERCISE 12: Count
// Show the number of children in an alert



// EXERCISE 13: Animate
// Make "#target" double size with animation


// EXERCISE 14: Alternate Color
// Make the list-box alternating. (Make odd options a different color)



// EXERCISE 15: All But One
// Remove all children of "#target" but h2



// EXERCISE 16: Without Children
// Remove all 'div' whitch has no child elements.





//Hints:
// Hint 1: you can use .css
// Hint 2: you can use .text
// Hint 3: you can use .clone and .insertAfter
// Hint 4: you can use .eq and .css
// Hint 5: you will have to select the button and can use .attr
// Hint 6: you will have to select the input and can use .removeAttr
// Hint 7: you can use .appendTo
// Hint 8: you will have to select the option and can use .eq and .attr
// Hint 9: you can use .css, .width and .height
// Hint 10: you can use .empty
// Hint 11: you can use .setTimeout and alert
// Hint 12: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5
// Hint 13: you can use .animate, .width, and .height
// Hint 14: you can select the option and use .filter and .css
// Hint 15: you can use .children, .not and .remove
// Hint 16: you can use .not and .remove. Look closely at what options you can pass .not