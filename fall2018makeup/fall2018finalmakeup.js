// JS

// click on menu
$(".menu").click(function(){
    //slide submenu up n down
    $(this).next(".submenu").slideToggle();
});



// This is what I tried doing, & nothing worked ....

//get story to load text on page load
$("#story").load("story0.txt");

//when I click on #stories option
$("#stories").click(function(){
    console.log("changed!");
    //variable to hold ID of this 
    var storytxt = $(this).next("li").id;
    console.log(storytxt);
    //make this ID value = #story text
    $("#story").load(storytxt);
});

//change color
//when color option is chosen
// $("#colors").click(function(){
//     //variable to hold selected color's id
    
//     //WHY ARE YOU UNDEFINED????????!!!!!!!
//     var colorchange = $(this).next("li").id;

//     // .get() does not work ...
//     // var colorchange = $(this).next("li").get("id");

//     // .attr() Does not work ... 
//     // var colorchange = $(this).next("li").attr("id");

//     console.log("clicked!");
//     console.log(colorchange);

//     //change #source element color to that id
//     $("#source").css("background-color", colorchange);
// });




// This isn't the way I wanted to do it, but it works ...

// C O L O R S

//select id of element
$("[id = lightpink]").click(function(){
    //change background color of source
    $("#source").css("background-color", "lightpink");

});

$("[id = lightsalmon]").click(function(){
    //change background color of source
    $("#source").css("background-color", "lightsalmon");

});




// EXTRA CREDIT
var i = 0;
$("button").click(function(){
    i++;
    $("#currentcount").html(i);
});