import fs from 'fs';
import http from 'http';
const download=(req,res)=>{
    console.log('donload stated ');
    const file=fs.createWriteStream('output2024-03-09T21-34-24-002Z.png')
    const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
     return res.status(200).json({message:"Download Completed"});
    })
});
}

export default download;