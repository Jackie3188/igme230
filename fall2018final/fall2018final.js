// JS

//when clicking on .top menu item
$(".top").click( function(){
//display submenu item following this menu item
$(this).next(".list").slideToggle();
})



// M Y   C O D E -----------------------

// //clicking on menu slides up & down menu
// var myMenu = document.querySelector(".top");
// var subItems = document.querySelector('.list');

// var toggle = false;

// myMenu.onclick = function(){
//     toggle = !toggle;

//     if(toggle){
//         // subItems.style.display = "block";
//         $('.list').slideDown();
//     }
//     else{
//         // subItems.style.display = "none";
//         $('.list').slideUp();
//     }
// }


// var select = document.querySelector("radio");

// // when window loads
// window.onload = function(){
//     // grab the content.txt file & if it does that successfully
//     $.ajax({url: "article1.txt", success: function(data){
//         //replace html of content ID to html of content1.txt
//         document.querySelector("option[value='article1.txt']").value = data;
//         // onload text set
//         document.querySelector('h2').innerHTML = select.value;
//     }});

//     $.ajax({url: "article2.txt", success: function(data){
//         //replace html of content ID to html of content2.txt
//         document.querySelector("option[value='article22.txt']").value = data;

//     }});

// };


// //when the selector option is changed
// select.onchange = function (){
//     // change the html of the content to equal the value of the selector
//     $("h2").html(select.value);

// }