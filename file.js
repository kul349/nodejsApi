const fs=require('fs')
// fs.writeFileSync("./text.txt","hello world")
// fs.writeFile("./text.txt","hello world async",(e)=>{})
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error")
//     }
//     else{
//         console.log(result);
//     }
// })
// fs.appendFileSync('./text.txt',`${Date.now()} hey there \n`)
const os =require("os");// the code is use for finding the size of cpu
console.log(os.cpus().length);