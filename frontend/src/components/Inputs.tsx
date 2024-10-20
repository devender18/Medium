interface InputTypes{
    title : string;
    placeholder : string;
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}


export function Inputs({title,placeholder, onChange, type}: InputTypes){
    return (
        <div className="mt-2">
            <label htmlFor="" className="font-bold">{title}</label>
            <div className="border-2 rounded-xl text-gray-400 mt-2">
                <input type={type || "text"} name="" id="" placeholder={placeholder} className="p-2 outline-none w-full" onChange={onChange} />
            </div>

        </div>
    )
}