import fs from "fs";
//// write in  file with fs
let content=['bader','amine','yassin'];
var  writeStram=fs.createWriteStream('test.txt','u');

content.forEach((item)=>writeStram.write(item+'\n')); 
writeStram.write(content[0]);
console.log('hi');