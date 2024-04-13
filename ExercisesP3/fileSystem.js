const { log } = require("console");
const fs = require("fs");
function readFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data);
    }
  });
}

console.log(readFile("input.txt"));
function writefile(filePath,data) {
    newdata ="Hello"+ "  " + "visal";
    fs.writeFile(filePath,newdata,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("SuccessFully............!");
    })
}
console.log(writefile('input.txt'));