import { Avatar } from "./Avatar";

interface BlogCardProps{
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;

}


export function BlogCard({authorName, title, content, publishedDate}: BlogCardProps){
    return (
        <div className="flex justify-center">
            <div className="flex-col justify-center m-8 border-b-2 w-2/3">

                <div className="flex justify-start items-center">

                    <Avatar title={authorName}/>
                    <div className="ml-4">{authorName}</div>
                    <div className="ml-4">{publishedDate}</div>

                </div>

                <div className="mt-4 ">
                    <div className="font-bold text-3xl">{title}</div>
                </div>

                <div className="mt-4">
                    <div>{content.length > 100 ?content.slice(0,200) + "...":content}</div>
                </div>

                <div className="mt-4 mb-8">
                    <div className="text-gray-500">{`${Math.ceil(content.length / 200)} mins read`}</div>
                </div>

            </div>
        </div>
    )
}


