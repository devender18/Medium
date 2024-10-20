type ButtonsTypes = {
    title : string,
    onClick : ()=>void
}

export function Buttons({title, onClick} : ButtonsTypes){
    return (
        <div className="text-white bg-black rounded-xl flex justify-center items-center mt-4 cursor-pointer" onClick={onClick}>
            <div className="p-2">{title}</div>
        </div>
    )
}