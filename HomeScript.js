body




// let head = document.getElementsByTagName('HEAD')[0];
// let link = document.createElement('link');
//         link.rel = "stylesheet";
//         link.ref = "./HomeStyle.css";
        
// head.appendChild(link);
{/* <link rel="stylesheet" href="./HomeStyle.css"></link> */}

function zoom() {
  var first = document.getElementById("firstone");
var second = document.getElementById("secondone");
var third = document.getElementById("thirdone");
var fourth = document.getElementById("fourthone");
  document.body.style.zoom = "75%"
  second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
}
function myFunction(x) {
  if (x.matches) { // If media query matches
    alert
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 200px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});


// document.getElementById('computerbody').style.MozTransform = "scale(0.2)";
// document.getElementById('computerbody').style.MozTransformOrigin = "0 0";


function Touch() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// var mob = 0
// if (Touch()) {
//   console.log("Mobile device detected");
//   mob = 1
// } else {
//   console.log("Desktop device detected");
//   mob = 0
//   alert("hi!")
// }

function ContactUS() {
  window.location.href = "ContactUs.html"
}
// if (check = true) {
//   document.getElementById("computerbody").style.display = "inline";
// }

// if (check = true) {
//   document.getElementById("mobilebody").style.display = "inline";
// }

function imagone() {
  window.open ( "https:sis.edu.hk",'_blank')
}
function imagtwo() {
  window.open ( "https:qbs.edu.hk",'_blank')
}
function imagthree() {
  window.open ( "https:bradbury.edu.hk",'_blank')
}
function imagfour() {
  window.open ( "http://www.ats.edu.hk/",'_blank')
}
function imagfive() {
  window.open ( "https://www.ymca.org.hk/en",'_blank')
}


// if (Touch()){
// document.getElementById("mobilebody").style.display = "inline";
// } else {
//   document.getElementById("computerbody").style.display = "inline";
// }


// function Home() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

// function AboutUs() {
//   window.location.href = "./AboutUs.html"
// }

//depression

// function changecolor1() {
//   var element = document.getElementById("forthcontainerid");
//   element.style.backgroundColor = "#4c7ce4";
// }

// function changecolor2() {
//   var element = document.getElementById("forthcontainerid");
//   element.style.backgroundColor = "#adcf9e";
// }


function hamburger(x) {
  x.classList.toggle("change");
}

function menubarstuff() {
  var img = document.getElementById("headerimg")
  var ID = document.getElementById("MenubarID")
  var header = document.getElementById("headerID")
  var bodystu = document.getElementById("bodystuff")

  if (window.getComputedStyle(ID).display === "none") {
    ID.style.display = "block"
    img.style.display = "none"
    header.style.paddingBottom = "4150px"
    bodystu.style.display = "none"
  } else {
    ID.style.display = "none"
    img.style.display = "block"
    header.style.paddingBottom = "20px"
    bodystu.style.display = "block"
  }
  
  
}





function next() {
  var first = document.getElementById("firstone");
var second = document.getElementById("secondone");
var third = document.getElementById("thirdone");
var fourth = document.getElementById("fourthone");
  console.log("is this even working");


  if (window.getComputedStyle(document.getElementById("firstone")).display === "flex") {
    second.style.display = "flex"
    first.style.display = "none"

  } else if (window.getComputedStyle(document.getElementById("secondone")).display === "flex") {
    third.style.display = "flex"
    second.style.display = "none"

  } else if (window.getComputedStyle(document.getElementById("thirdone")).display === "flex") {
    fourth.style.display = "flex"
    third.style.display = "none"
    
  } else if (window.getComputedStyle(document.getElementById("fourthone")).display === "flex") {
    first.style.display = "flex"
    fourth.style.display = "none"
  }
}

function back() {

  var first = document.getElementById("firstone");
var second = document.getElementById("secondone");
var third = document.getElementById("thirdone");
var fourth = document.getElementById("fourthone");
  if (window.getComputedStyle(first).display === "flex") {
    fourth.style.display = "flex"
    first.style.display = "none"

  } else if (window.getComputedStyle(second).display === "flex") {
    first.style.display = "flex"
    second.style.display = "none"

  } else if (window.getComputedStyle(third).display === "flex") {
    second.style.display = "flex"
    third.style.display = "none"
    
  } else if (window.getComputedStyle(fourth).display === "flex") {
    third.style.display = "flex"
    fourth.style.display = "none"
  }
}



function nextmob() {
  var first = document.getElementById("firstone");
var second = document.getElementById("secondone");
var third = document.getElementById("thirdone");
var fourth = document.getElementById("fourthone");
  console.log("is this even working");


  if (window.getComputedStyle(first).display === "block") {
    second.style.display = "block"
    first.style.display = "none"

  } else if (window.getComputedStyle(second).display === "block") {
    third.style.display = "block"
    second.style.display = "none"

  } else if (window.getComputedStyle(third).display === "block") {
    fourth.style.display = "block"
    third.style.display = "none"
    
  } else if (window.getComputedStyle(fourth).display === "block") {
    first.style.display = "block"
    fourth.style.display = "none"
  }
}

function backmob() {

  var first = document.getElementById("firstone");
var second = document.getElementById("secondone");
var third = document.getElementById("thirdone");
var fourth = document.getElementById("fourthone");
  if (window.getComputedStyle(first).display === "block") {
    fourth.style.display = "block"
    first.style.display = "none"

  } else if (window.getComputedStyle(second).display === "block") {
    first.style.display = "block"
    second.style.display = "none"

  } else if (window.getComputedStyle(third).display === "block") {
    second.style.display = "block"
    third.style.display = "none"
    
  } else if (window.getComputedStyle(fourth).display === "block") {
    third.style.display = "block"
    fourth.style.display = "none"
  }
}





var mySpans = document.getElementsByTagName(a);

for(var i=0;i<mySpans.length;i++){

if(mySpans[i].innerHTML == 'OUR ALUMNI'){

var parent = mySpans[i].parentNode;
parent.display.style = "none"
break;

}


}

