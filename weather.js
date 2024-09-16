const textbox=document.getElementById("textbox");
const toFaherenheit=document.getElementById("toFaherenheit");
const tocelsius=document.getElementById("tocelsius");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
let temp;

submit.onclick=function(){

    if(toFaherenheit.checked){

    }
    else if(tocelsius.checked){

    }
    else{
        result.textContent="Select a Unit";
    }
}