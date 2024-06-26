import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { BaseUrl } from "./touls";
import Loding_Emails from "./Loading/loading_emails";
import ListeEmails from "./Compoment/ListEmails";
import toast, { Toaster } from 'react-hot-toast';
const success = () =>toast.success('Successfully scraping');
const error = () =>toast.error('Server Error Try Again .. !');

function App() {
  const url = useRef();
  const [Emails, seteamils] = useState([]);
  const [filename, setfilename] = useState("");
  const [loading, setLoding] = useState(false);

  const Start_Scarping = async () => {

    try {
      setLoding(true);
      let body = { url: url.current.value };
      const res = await axios.post(`${BaseUrl}/EmailScraping`, body);
      const response = await res.data;
      if (response) {
        console.log(response);
        setLoding(false);
        seteamils(response.resultat);
        setfilename(response.file);
        success();
      }
    } catch (e) {
      error();
      setLoding(false);
      console.log(e);
    }
  };

  const handelScraping = () => {
    // const url_regex=/^https:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
    // if(url_regex.test(url.current.value)){
    Start_Scarping();
    return true;
    // }else{
    //   alert('Type a valide Url like https://www.scraping.com ');
    // }
    
  };

  return (
    <>
     <Toaster />
      <h1 className="">Emails Scarper </h1>
      <div className="card ">
        <div className="flex flex-row w-full">
          <span className="w-16 bg-black rounded text-center flex justify-center items-center">
            {" "}
            <img src="lien.png" alt="line" width={30} height={30} />
          </span>
          <input id="url" className="w-full" ref={url} type="text" placeholder=" type Url ..." />
        </div>
        <button onClick={handelScraping}>Start Scraping</button>
      </div>
      <div className="relative mt-10">
        {loading ? <Loding_Emails /> : <ListeEmails filename={filename} Emails={Emails} />}
      </div>

    </>
  );
}

export default App;

