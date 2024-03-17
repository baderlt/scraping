import { useState } from "react";

const ListeEmails=({Emails})=>{
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
        <span className={` absolute top-0 right-0 ${!copy ? "bg-slate-300" :'bg-slate-500' }   rounded m-2 p-1 hover:bg-gray-400 cursor-pointer flex`} onClick={Copy_Emails}> <b>{copy ? 'Cpyed':'Copy'}</b> &ensp;<img src="Copy.png" alt="copy"  /></span>
      { Emails.map((email,index)=>{
        
        return <p key={index} className="flex"><span className="index-email  text-gray-500">{index}</span>&ensp;&ensp;<p className="email" >{email}</p> </p>;
})}
<button className="rounded-lg bg-green-500 ">Download</button>
</div>
 : <h2 className="text-xl">No Email Found .. !</h2>}
    </>
)
}
export default ListeEmails