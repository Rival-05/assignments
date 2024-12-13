// let count = 0;
// function log(){
//     count++;
//     console.log(count);
//     anonymous();
// }
// function anonymous (){setTimeout(log,1000);}
// anonymous();


function timemachine(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if(hours>12){
        console.log(hours + ":" + minutes + ":" + seconds + "pm");
    }
    else{
        console.log(hours + ":" + minutes + ":" + seconds + "am");
    }
    anonymous();
}
function anonymous(){
    setTimeout(timemachine,1000);
}
anonymous();