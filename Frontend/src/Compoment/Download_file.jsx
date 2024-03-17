import axios from "axios";
import { BaseUrl } from "../touls";

const download_file=async(filename)=>{
 
        try {
            const response = await axios.get(`${BaseUrl}download-file/${filename}`, {
                responseType: 'blob' // Important for downloading binary files
            });
            const blob = new Blob([response.data], { type: 'text/plain' });

            const url = window.URL.createObjectURL(blob);

 
            const link = document.createElement('a');
            link.href = url;
            link.download = 'generated_file.txt';
            document.body.appendChild(link);
            link.click();

            // Cleanup
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
        }

}
export default download_file;