function displayDate(){

	document.getElementById("dis").innerHTML=Date();
}

let st="how are you";
document.getElementById("str").innerHTML=st.length;
document.getElementById("subs").innerHTML=st.substring(0,3);
document.getElementById("ind").innerHTML=st.lastIndexOf("are");
document.getElementById("inds").innerHTML=st.indexOf("are",8);
const arr=["S.M","Abu","Hena"];
document.getElementById("arr").innerHTML=arr.sort();
arr.push("Mostafa");
document.getElementById("arr1").innerHTML=arr.sort();
const da= new Date();
document.getElementById("arr2").innerHTML=da.getDay();

document.getElementById("arr3").innerHTML=da.getMonth();
document.getElementById("arr4").innerHTML=da.setFullYear("1996");
document.getElementById("arr4").innerHTML=da.getFullYear();


function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Not applicable":" Applicable";
  document.getElementById("arr5").innerHTML = voteable + " to vote.";
}

const hour=new Date().getHours();
let greetings;

if(hour<18)
{
	greetings="Good day";
}
else{
	greetings="Good night";
}

document.getElementById("gre").innerHTML=greetings;


let day;

switch(new Date().getDay()){
  
  case 0:
  day="Sunday";
  break;
  case 1:
  day="Monday";
  break;
  case 3:
  day="Tuesday";
  break;
  case 4:
  day="Wednessday";
  break;
  case 5:
  day="Thursday";
  break;
  case 6:
  day="Friday";
  break;

}


document.getElementById("da").innerHTML=day;

let text="";

for(let i=0;i<10;i++)
{
	text+="Number"+i+"<br>";
}

document.getElementById("num").innerHTML=text;

const person={

	firstName:"Abuhena",
	lastName:"Mostafa",
    fullName:function(){
   return this.firstName +" "+this.lastName;
    }	
};

document.getElementById("pp").innerHTML=person.fullName();


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("Car").innerHTML ="Car Name & year:"+myCar.name + " " + myCar.year;



$(document).ready(function(){

	$('.bt0').click(function(){
		alert("welcome");
	});

$( ".bt1" ).click(function() {
  $( "p" ).fadeToggle( "slow", "linear" );
});
$( ".bt2" ).click(function() {
   $( "p" ).fadeToggle( "first", "linear" );
});
$(".add").css("border","1px solid lime").add(".p_add").css("background","red");

$(".p_add ").click(function () {
if ( $( ".add" ).first().is( ":hidden" ) ) {
    $( ".add" ).slideDown( "slow" );
  } else {
    $( ".add" ).hide();
  }
});

$( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});



$( "#right" ).click(function() {
  $( ".img1" ).animate({ "left": "+=50px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".img1" ).animate({ "left": "-=50px" }, "slow" );
});
$( "#go1" ).click(function() {
  $( "#block1" )
    .animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
});
 
$( "#go2" ).click(function() {
  $( "#block2" )
    .animate({ width: "90%" }, 1000 )
    .animate({ fontSize: "24px" }, 1000 )
    .animate({ borderLeftWidth: "15px" }, 1000 );
});
 
$( "#go3" ).click(function() {
  $( "#go1" ).add( "#go2" ).click();
});
 
$( "#go4" ).click(function() {
  $( "div" ).css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
});

$( "#clickme" ).click(function() {
  $( "#book" ).blur();
});

$( window ).load(function() {
     Hello
});

});