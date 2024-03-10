import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import { BaseUrl } from './touls';
import Loding_Emails from './Loading/loading_emails';
import ListeEmails from './Compoment/ListEmails';

function App() {
const url =useRef();
const [Emails,seteamils]=useState([]);
const [loading,setLoding]=useState(false);


const Start_Scarping=async()=>{
try{
  setLoding(true);
  let body={url:url.current.value};
 const res =await axios.post(`${BaseUrl}/EmailScraping`,body);
 const  response= await res.data;
 if(response){
seteamils(response.resultat)
  setLoding(false);
 }
}catch(e){
  console.log(e);
}
  }

  const handelScraping=()=>{
    const url_regex=/^https:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
    if(url_regex.test(url.current.value)){
      Start_Scarping();
      return true;
  }else{
    alert('Type a valide Url like https://www.scraping.com ');
  }
  }
  return (
    <>
      
   
     
      <h1>Emails Scarper </h1>
      <div className="card">
        <input id='url' ref={url} type="text" placeholder='type Url ...' />
        <button onClick={handelScraping}>
   Start Scraping 
        </button>

      </div>
 
      <div style={{position:'relative'}}>     
        {loading ? <Loding_Emails/> : <ListeEmails/>}
        </div>
 

    </>
  )
}

export default App
