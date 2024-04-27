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
// fs.appendFileSync('test.txt',content[0],(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('write');
//     }
// });

///// read file with fs 

// Create a readable stream
var reader = fs.createReadStream('test.txt', 'utf-8');

// Event listener for when data is available
reader.on('data', function(chunk) {
    // Split the chunk by lines
    var lines = chunk.split('\n');
    // Loop through each line
    lines.forEach(function(line) {
        console.log(line); // Process each line as needed
    });
});

// Event listener for when all data has been read
reader.on('end', function() {
    console.log('End of file');
});