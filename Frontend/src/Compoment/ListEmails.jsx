import { useState } from "react";
import download_file from "./Download_file";

const ListeEmails=({Emails,filename})=>{
const [copy,setcopy]=useState(false);
    const Copy_Emails=()=>{

        let Copyemails =Array.from(document.querySelectorAll(".email"));
        let text='';
        Copyemails.forEach(element => {
            text+=element.innerHTML+"\n";
        });
        navigator.clipboard.writeText(text);
        setcopy(true);
        return;
      }
return (
    <>
    {Emails.length > 0 ? 
    <div className="Emails relative bg-white text-black rounded-lg flex flex-col text-left px-5 py-5 h-auto max-h-[300px] overflow-y-auto ">
        <span className={` absolute top-0 text-xs right-0 ${!copy ? "bg-slate-300" :'bg-slate-500' }   rounded m-2 p-1 hover:bg-gray-400 cursor-pointer flex`} onClick={Copy_Emails}> <b>{copy ? 'Cpyed':'Copy'}</b> &ensp;<img src="Copy.png" width={20} alt="copy"  /></span>
      { Emails.map((email,index)=>{
        
        return <p key={index} className="flex"><span className="index-email  text-gray-500">{index}</span>&ensp;&ensp;<p className="email" >{email}</p> </p>;
})}
<span className="flex justify-end h-10">
<button className="rounded-lg bg-green-700 flex  w-28 justify-center items-center text-center h-8" onClick={()=>download_file(filename)}>Download</button>
</span>
</div>
 : <h2 className="text-xl">No Email Found .. !</h2>}
    </>
)
}
export default ListeEmails