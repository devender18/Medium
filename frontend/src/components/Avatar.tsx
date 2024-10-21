export function Avatar({title} : {title : string}){
    return (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-400 text-white">
            <h3>{title[0].toUpperCase()}</h3>
        </div>
    )
}