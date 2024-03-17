import fs from 'fs';

const download=(req,res)=>{
    const filePath = path.join(__dirname, `files/${req.file}`);
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}

export default download;