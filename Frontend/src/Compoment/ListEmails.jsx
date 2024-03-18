import { useState } from "react";
import download_file from "./Download_file";

const ListeEmails = ({ Emails, filename }) => {
  const [copy, setcopy] = useState(false);
  const Copy_Emails = () => {
    let Copyemails = Array.from(document.querySelectorAll(".email"));
    let text = "";
    Copyemails.forEach((element) => {
      text += element.innerHTML + "\n";
    });
    navigator.clipboard.writeText(text);
    setcopy(true);
    return;
  };
  return (
    <>
      {Emails.length > 0 ? (
        <div className="Emails relative bg-black text-gray-300 rounded-lg flex flex-col text-left px-5 py-5 m-4 h-auto max-h-[300px] overflow-y-auto ">
          <span
            className={` absolute top-0 text-black  text-xs right-0 ${
              !copy ? "bg-gray-500" : "bg-gray-700"
            }   rounded m-2 p-1 hover:bg-gray-400 cursor-pointer flex`}
            onClick={Copy_Emails}
          >
            {" "}
            <b>{copy ? "Cpyed" : "Copy"}</b> &ensp;
            <img src="Copy.png" width={20} alt="copy" />
          </span>
          <h3 className="text-xl text-center rounded-full">
            <b className=" rounded-full bg-green-700/30 px-1.5  text-white">
              {Emails.length}
            </b>{" "}
            Emails Found
          </h3>
          {Emails.map((email, index) => {
            return (
              <p key={index} className="flex">
                <span className="index-email  text-gray-500">{index + 1}</span>
                &ensp;&ensp;<p className="email">{email}</p>{" "}
              </p>
            );
          })}
          <span className="flex justify-end -mr-2 h-10">
            <button
              className="rounded-lg bg-green-700/70  hover:bg-green-700 flex  w-10 p-2 justify-center items-center text-center h-8"
              onClick={() => download_file(filename)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-file-earmark-arrow-down"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </button>
          </span>
        </div>
      ) : (
        <h2 className="text-xl">No Email Found .. !</h2>
      )}
    </>
  );
};
export default ListeEmails;
