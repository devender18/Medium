import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Buttons } from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Publish(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
    
        <div>
            
            <Appbar />
            <div className="flex justify-center w-screen mt-8 ">
                <div className="flex-col justify-center w-2/3 ">
                    <div className=" flex justify-center items-center  ">
                        <div className="border-2 w-full rounded-lg">
                            <input type="text" placeholder="Title" className="outline-none w-full p-1 ml-1" onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="border-2 mt-4 h-96 rounded-lg">
                        <div className="w-full h-full">
                            <textarea placeholder="write your article...." onChange={(e)=>setContent(e.target.value)} className="h-full w-full p-2  outline-none">

                            </textarea>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="w-40 ml-48 mt-8">
                <Buttons title="Post" onClick={async ()=>{
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content

                        },
                        {
                            headers:{
                                Authorization : localStorage.getItem("token")
                        }}
                    )

                    navigate(`/blog/get/${response.data.id}`)

                }}/>
            </div>
        </div>

    )
}