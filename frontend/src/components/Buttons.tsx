type ButtonsTypes = {
    title : string
}

export function Buttons({title} : ButtonsTypes){
    return (
        <div className="text-white bg-black rounded-xl flex justify-center items-center mt-4">
            <div className="p-2">{title}</div>
        </div>
    )
}