const fs = require("fs");
// fs.writeFile("hello.txt","hello from node js",(err)=>{
//     if(err) throw err;
//     console.log("file created");
// });
fs.readFile("./message.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});