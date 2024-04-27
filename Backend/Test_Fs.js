import fs from "fs";
//// write in  file with fs
let content=['bader','amine','yassin'];
// var  writeStram=fs.createWriteStream('test.txt',{flags:'a'});

// content.forEach((item)=>writeStram.write(item+'\n','utf-8')); 
// writeStram.write(content[0]);
// fs.truncate('test.txt',0,(error)=>{
//     if(error){
//         console.log(error);
//     }else{console.log('trucate')};
// });
fs.appendFileSync('test.txt',content[0],(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('write');
    }
});
console.log('hi');