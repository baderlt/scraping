import axios from "axios";
import { BaseUrl } from "../touls";
import toast, { Toaster } from 'react-hot-toast';
const success = () =>toast.success('File download with success');
const error = () =>toast.error('Server Error Try Again .. !');
const download_file=async(filename)=>{
 
        try {
            const response = await axios.get(`${BaseUrl}/downloadfile/${filename}`, {
                responseType: 'blob' // Important for downloading binary files
            });
            const blob = new Blob([response.data], { type: 'text/plain' });

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'generated_Emails.txt';
            document.body.appendChild(link);
            link.click();
            
            // Cleanup
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
            success();
        } catch (error) {
            error();
            console.error('Error downloading file:', error);
        }

}
export default download_file;