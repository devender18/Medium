import { Avatar } from "./Avatar";

interface FullBlogProps{
    title : string;
    date : string;
    content : string;
    name : string ;
}

export function FullBlog({title, date, content, name} : FullBlogProps){
    return <div className="grid grid-cols-11 w-screen p-20">
        <div className="grid col-span-7 ">
            <div className="">
                <div className="font-bold text-4xl">{title}</div>
                <div className="text-gray-500 mt-2">{`Posted on ${date}`}</div>
                <div className="mt-8 font-serif">{content}</div>
            </div>

        </div>

        <div className="grid col-span-4 ml-4">
            
                <div className=" ">
                    <p className="font-semibold min-h-0">Author</p>
                    <div className="flex justify-center items-center">
                        <div>
                            <Avatar title={name}/>
                        </div>

                        <div className="ml-2">
                            <div className="font-bold text-2xl">{name[0].toUpperCase()+name.slice(1)}</div>
                            <div className="text-gray-500">Master of mirth, purveyor of puns, and the funniest person in the kingdom</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}