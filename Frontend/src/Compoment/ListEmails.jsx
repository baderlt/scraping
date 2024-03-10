const ListeEmails=(Emails)=>{
return (
    <>
    <div className="Emails ">
       {Emails.length >0 ? Emails.map((email,index)=>{
        return <p key={index}><span className="index-email">{index}</span> {email}</p>
        }) :""}
    </div>
    </>
)
}
export default ListeEmails