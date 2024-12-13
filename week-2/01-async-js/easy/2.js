let count = 0;
function log(){
    count++;
    console.log(count);
    anonymous();
}
function anonymous (){setTimeout(log,1000);}
anonymous();