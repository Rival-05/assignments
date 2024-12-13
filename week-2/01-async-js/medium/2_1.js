// let count = 0;
// setInterval(()=>{
//     count++;
//     console.log(count);
// },1000);

function timemachine(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(hours + ":" + minutes + ":" + seconds);
}

setInterval(timemachine, 1000);
