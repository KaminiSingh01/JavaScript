function updateTime(){
    
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const mer = hour >=12 ? "PM" : "AM";
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hour}:${min}:${sec} ${mer}`;
    document.getElementById("clock").textContent=timestring;
}

updateTime();
setInterval(updateTime,1000);