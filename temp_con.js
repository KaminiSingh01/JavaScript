const text= document.getElementById("textbox").value;
const tocelcius= document.getElementById("cel_fah");
const tofahreheit= document.getElementById("fah_cel");
let result= document.getElementById("result");
let temp;

document.getElementById("submit").onclick=function(){

    if(tofahreheit.checked){
        result.textContent="You select fah";
        console.log("fahrenheit");
    }
    else if(tocelcius.checked){
        result.textContent=`You Selected the Celsius`;
    }
    else{
        result.textContent=`Select a Unit`;
    }
}