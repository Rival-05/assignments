const fs = require("fs");
let statement = "";
fs.readFile("text_file.txt", "utf8" , function(err,data){
    statement = data;
    // statement = statement.replace(/[^a-zA-Z0-9\s]/g,''); 
    // Used to remove any extra non-alphanumeric characters from the string.
    statement = statement.replace(/\s+/g, ' ');
    console.log(statement.trim());
});
