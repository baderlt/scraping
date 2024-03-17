import fs from 'fs';
import http from 'http';
const download=(req,res)=>{
    const filePath = path.join(__dirname, `${req.file}`);
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}

export default download;