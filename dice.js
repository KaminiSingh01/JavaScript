document.getElementById("rolldice").onclick=function() {
    const  numofdice=document.getElementById("numberofdice").value;
    const diceResult=document.getElementById("diceresult");
    const diceImage=document.getElementById("diceimage");
    const values=[];
    const images=[];

    for(let i=0;i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png" alt="dice ${value}">`);
    }
    diceResult.textContent=`dice: ${values.join(`, `)}`;
    diceImage.innerHTML=images.join(` `);
}