import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import { BaseUrl } from './touls';

function App() {
const url =useRef();


const Start_Scarping=async()=>{
try{
  let body={url:url.current.value};
 const res =await axios.post(`${BaseUrl}/EmailScraping`,body);
 const  response= await res.data;
 if(response){
  console.log(response);
  alert('scraping completed with success');
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
      <div>
   
      </div>
      <h1>Scrap Emails</h1>
      <div className="card">
        <input id='url' ref={url} type="text" placeholder='type Url ...' />
        <button onClick={handelScraping}>
   Scarpe
        </button>

      </div>

    </>
  )
}

export default App
