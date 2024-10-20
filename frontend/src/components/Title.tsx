import { Link } from "react-router-dom"

interface TitleType{
    title : string,
    subTitle : string
}
export function Title({title,subTitle}: TitleType){
    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <div className="text-4xl font-bold">{title}</div>
                <div className="text-gray-500"> {subTitle}<Link className="underline" to="/Signin"> Login</Link></div>
            </div>
        </div>
    )
}