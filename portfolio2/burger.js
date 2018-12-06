// Nav Burger

var links = document.querySelector("nav");
var toggle = true;
var burger = document.querySelector("#burgerBox");
/* CODE SOURCE: https://www.w3schools.com/howto/howto_css_menu_icon.asp*/
function myFunction(x) {
    x.classList.toggle("change");

    /* Display and hide nav menu items on toggle */
    toggle = !toggle

    if(toggle){
        links.style.display = "none";
    }
    else{
        links.style.display = "block";
    }
}


// burger.onclick = function(){
//     toggle = !toggle

//     if(toggle){
//         links.style.display = "none";
//     }
//     else{
//         links.style.display = "block";
//     }
// }

