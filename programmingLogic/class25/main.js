// learning about setInterval and setTimeout

// setInterval will update the time, and setTimeout will stop 

function displayTime(){
    const date = new Date();
    return date.toLocaleTimeString("pt-BR",
    {hour12: false})
}

const interval = setInterval(function(){
    console.log(displayTime());
}, 1000);

setTimeout(function() {
    clearInterval(interval);
}, 3000);

setTimeout(function() {
    console.log("Hello world");
}, 4000)