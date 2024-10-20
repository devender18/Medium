interface Label{
    quote : string,
    author : string,
    country : string
}

export function Lables({quote,author,country}: Label){
    return (
        <div className="flex justify-center items-center bg-[#F3F5F7]">
            <div className="w-1/2 m-24">
                <p className="font-bold text-2xl">"{quote}"</p>
                <p className="font-semibold text-lg mt-4">{author}</p>
                <p className="text-gray-400 text-md ">{country}</p>
            </div>
        </div>
    )
}