/* Don't use <script> tags in a linked js file! */

/* get menu items */
var myMenu1 = document.querySelector(".menuitem1");
var myMenu2 = document.querySelector(".menuitem2");

/* toggle on off */
var toggleMenu1 = false;
var toggleMenu2 = false;

//create function with if statement to change display of subitem when menu is clicked
myMenu1.onclick = function(){
    //select sub menu items1 & hold in variable
    var mySub = document.querySelector('.submenu1');
    //when clicked make it opposite to current value
        toggleMenu1 = !toggleMenu1;
        //make it visible or hidden depending on "on" or "off" value
        if (toggleMenu1) {
            // mySub.style.display = "inline";
            $(mySub).slideDown();
        }
        else {
            // mySub.style.display = "none";
            $(mySub).slideUp();
        }  
    }

    // repeat function for menu2 & items2
     myMenu2.onclick = function(){
        console.log("I'm clicked!");
        //select sub menu items1 & hold in variable
        var mySub = document.querySelector('.submenu2');
        //when clicked make it opposite to current value
            toggleMenu2 = !toggleMenu2;
            //make it visible or hidden depending on click
            if (toggleMenu2) {
                //mySub.style.display = "inline";
                $(mySub).slideDown();

            }
            else {
                //mySub.style.display = "none";
                $(mySub).slideUp();
            }  
        }


// JQUERY TRANSITIONS

