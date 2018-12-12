/* Don't use <script> tags in a linked js file! */
// JS

//MENU 1
//when you click the menu item
$(".menuitem1").click(function(){
    // submenu will display on sliding
    $(".submenu1").slideToggle();

});

//MENU 2
//when you click the menu item
$(".menuitem2").click(function(){
    // submenu will display on sliding
    $(".submenu2").slideToggle();

});

//when page loads display contexxt1.txt in #content
var changer= $("option").val()
$("#content").load(changer);

//when menu option changes
$("#choose-content").change(function(){
    //variable to hold value of selected option
    var changetxt = $(this).val();
    //set #content = value of new selected option
    $("#content").load(changetxt);
    console.log(changetxt);
    // documnet.querySelector("#content").innerHTML(changer);
});