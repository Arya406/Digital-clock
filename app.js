let hour = document.getElementById('hrs');
let minute = document.getElementById('min');
let second = document.getElementById('sec');
setInterval(()=>{
let currentTime = new Date();
hour.innerHTML = currentTime.getHours();
minute.innerHTML = currentTime.getMinutes();
second.innerHTML = currentTime.getSeconds();
},1000)