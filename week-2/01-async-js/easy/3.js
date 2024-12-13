const fs = require("fs");
fs.readFile("text_file.txt", "utf-8", function(err,data){
    console.log(data);
})
let a = 0;
for(let i=0 ; i<1000000;i++){
    a++;
}