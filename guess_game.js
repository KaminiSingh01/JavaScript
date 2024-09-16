let minnum=1;
let maxnum=100;
let num=Math.floor(Math.random()*(maxnum-minnum))+minnum;

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Enter the Number between ${minnum} and ${maxnum}:`);
guess=Number(guess);

if(isNaN(guess)){
    window.alert("Invalid number");
}
else if(guess < minnum || guess > maxnum){
    window.alert("please enter the number within the range");
}
else{
    attempt++;
    if(guess<num){
        window.alert("Your Number is too small");
       
    }
    else if(guess>num){
        window.alert("Your Number is too Large");
       
    }
    else{
        window.alert(`Correct Answer After ${attempt} attempt`);
        running=false;
    }
}
    

}






