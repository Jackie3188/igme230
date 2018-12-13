// JS

// click on menu
$(".menu").click(function(){
    //slide submenu up n down
    $(this).next(".submenu").slideToggle();
});



//I wanted / tried to do it THIS WAY but nothing worked ....

// S T O R I E S

//get story to load text on page load
//this is working
$("#story").load("story0.txt");

//when I click on #stories option
$("#stories").click(function(){
    console.log("changed!");
    //variable to hold ID of this 
    // THIS IS THE PROBLEM BUT WHY?!?!?!
    var storytxt = $(this).next("li").id;
    //does not recognize var storytxt 
    console.log(storytxt);
    //make this ID value = #story text
    $("#story").load(storytxt);
});




// I wanted to do it THIS WAY but nothing was working ...

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

//select id of element
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