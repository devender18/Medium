import { useState } from "react"
import { Buttons } from "../components/Buttons"
import { Inputs } from "../components/Inputs"
import { Lables } from "../components/Label"
import { Title } from "../components/Title"
import { SignupInput } from "@dev2873/medium-common";
import axios from 'axios';
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export function Signup(){

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name : "",
        email : "",
        password : ""
    })
    const navigate = useNavigate();

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs);
    
            const jwtToken = response.data.token
            localStorage.setItem('token',`Bearer ${jwtToken}` )
            navigate("/blogs")
        }catch(err){
            console.log("error while logging in",err);
        }
    }

    // type dictype = {
    //     title : string,
    //     placeholder : string
    // }



    // const dic: dictype[] = [{title : "Username", placeholder : "Enter your username"},{title : "Email", placeholder : "xyz@example.com"}, {title : "Password", placeholder : ""} ]
    return (
        <div className="w-screen h-screen flex  justify-center items-center  ">
            <div className="w-1/2 flex justify-center items-center">
                <div className="w-96 ">
                    <Title  title="Create an account" subTitle="Already have an account?" type="signup"/>
                    <div className="mt-4">
                        <Inputs title="Username" placeholder="Enter your username" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                name : e.target.value
                            })
                        }}/>
                        <Inputs title="Email" placeholder="xyz@example.com" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                email : e.target.value
                            })
                        }} />
                        <Inputs title="Password" type={"password"} placeholder="" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                password : e.target.value
                            })
                        }}/>
                        {/* {dic.map((item)=>{
                            return (<Inputs title={item.title} placeholder={item.placeholder}/>)
                        })} */}
                    </div>
                    <Buttons title="Sign Up" onClick={sendRequest}/>

                </div>
            </div>
            <div className="hidden md:inline-flex w-1/2 bg-[#F3F5F7] h-full flex ">
                <Lables quote="The customer service I received was exceptional. The support team went above and beyond to address my concerns." country="CEO, Acme Inc" author="Jules Winnfield"/>
            </div>
        </div>
    )
}