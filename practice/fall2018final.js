// JS

// // when menu item is clicked
// $(".top").click(function(){
//     //SLIDE TOGGLE- Display or hide the matched elements with a sliding motion.
//     //display submenu item
//     $(this).next(".list").slideToggle();
// });

// when radio button is selected, change article text to corresponding article.txt

//when radio is selected
$("article").load("article0.txt");
$("input[name = 'story']").click(function(){
    //variable for selected button value
    var changetxt = $(this).val();
    //change article html to value of selected button
    $("article").load(changetxt);
});

//increment button counter
var i = 0;
//when button is clicked
$("#click").click(function(){

//keep count of number of times button is clicked
i++;
//set it = to button counter text
$("#clickcount").html(i);
});


// when menu item is hovered over
$(".top").hover(function(){
    //display submenu item - slide down
    $(this).next(".list").slideDown();
});

//when the mouse leaves the submenu item dropdown
$(".list").mouseleave(function() {
    //slide the menu back up
    $(this).slideUp();
})

//when submenu item is clicked
$("li").click(function(){
    //change article color
    $("article").css("background-color","lightgrey");
    var txtchanger = $("input[name = 'story']").val();
    $("article").load(txtchanger);

});
//change background color of article