import { Avatar } from "./Avatar";

export function Appbar(){
    return (
        <div className="flex justify-between items-center border-b-2 p-2">
            <div className="ml-4 font-bold text-xl">Medium</div>
            <div className="mr-4"><Avatar title="Devender" /></div>
        </div>
        
    )
}