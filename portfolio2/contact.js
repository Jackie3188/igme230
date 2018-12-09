// Contact JS

// I M A G E   C H A N G E R
// profile page - click event

// select image from HTML doc
var myImage = document.querySelector("#phonemail");

//create function with if statement to change src image when clicked
myImage.onclick = function(){
    console.log("I'm clicked!");
    //mySrc will be equal to source string for img
    var mySrc = myImage.getAttribute('src');
    //if the src string is = to image 1 when clicked
    if(mySrc === 'images/contact1.png'){
        //change to image 2
        myImage.setAttribute('src', 'images/contact2.png');
    } else {
        //otherwise remain image 1
        myImage.setAttribute('src', 'images/contact1.png');
    }
}
