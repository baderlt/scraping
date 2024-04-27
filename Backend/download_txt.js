import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const download = (req, res) => {
  const { file } = req.params;
  /// get the current path
  const __filename = fileURLToPath(import.meta.url);
  /// get the current diroctory
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", file);
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Content-Length": stat.size,
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};
export default download;
