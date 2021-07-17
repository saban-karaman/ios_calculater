var b1 = document.getElementById("b1").innerText;
var b2 = document.getElementById("b2").innerText;
var b3 = document.getElementById("b3").innerText;
var b4 = document.getElementById("b4").innerText;
var b5 = document.getElementById("b5").innerText;
var b6 = document.getElementById("b6").innerText;
var b7 = document.getElementById("b7").innerText;
var b8 = document.getElementById("b8").innerText;
var b9 = document.getElementById("b9").innerText;
var b0 = document.getElementById("zero").innerText;
var bb = document.getElementById("bb").innerText;
// console.log(typeof (b1));
// result = document.getElementById("row2").innerText;
// content = document.getElementById("row1").innerText;
// console.log(typeof result);


function abc(numb){
   if (document.getElementById("row2").innerText === "0" ) {
    document.getElementById("row2").innerText = numb;
   }else{
    document.getElementById("row2").innerText += numb;
    }
    
}
function clears() {
    document.getElementById("row2").innerText = "0";
    document.getElementById("row1").innerText = "";
}

function calculate(second) {
    first = parseFloat(document.getElementById("row2").innerText);
    document.getElementById("row1").innerText = first + second;
    document.getElementById("row2").innerText = "";
    if (document.getElementById("row2").innerText === "=") {
        
    }
}

function equal() {
    first = document.getElementById("row1").innerText 
    document.getElementById("row1").innerText = first + document.getElementById("row2").innerText + "=";
    document.getElementById("row2").innerText = eval(first + document.getElementById("row2").innerText); 

}




