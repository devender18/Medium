import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";

export function Appbar(){
    return (
        <div className="flex justify-between items-center border-b-2 p-2">
            <Link to="/blogs">
                <div className="ml-4 font-bold text-xl cursor-pointer">Medium</div>
            </Link>
            <div className="flex justify-between items-center">
                <Link to="/publish">
                <div className="mr-8 border bg-green-400 text-white font-thin rounded-md px-1 cursor-pointer">Create Post</div>
                </Link>
                <div className="mr-4"><Avatar title="Devender" /></div>
            </div>
        </div>
        
    )
}