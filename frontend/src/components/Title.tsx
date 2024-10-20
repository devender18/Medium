import { Link } from "react-router-dom"

type pageType = "signup" | "signin";

interface TitleType{
    title : string,
    subTitle : string
    type?:pageType
}

export function Title({title,subTitle, type}: TitleType){
    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <div className="text-4xl font-bold">{title}</div>
                <div className="text-gray-500"> {subTitle}<Link className="underline" to={type === 'signup'?"/Signin":"/Signup"}>{type === 'signup'?"Login":"SignUp" }</Link></div>
            </div>
        </div>
    )
}