export function BlogSkeleton(){
    return(
        <div className="flex justify-center">
            <div className="flex-col justify-center m-8 w-2/3">

                <div className="flex justify-start items-center">

                    {/* avatar */}
                    <div className="h-8 w-8 bg-gray-200 rounded-full "></div>
                    {/* authorname */}
                    <div className="ml-4 bg-gray-200 w-10"></div>
                    {/* date */}
                    <div className="ml-4  bg-gray-200 w-10"></div>

                </div>

                <div className="mt-4 ">
                    {/* title */}
                    <div className="font-bold text-3xl  bg-gray-200 w-20 h-4"></div>
                </div>

                {/* content */}
                <div className="mt-4 bg-gray-200">
                    
                    <div className="w-20 h-4"></div>
                </div>

                <div className="mt-4 mb-8">
                    <div className="bg-gray-200 w-10 h-4"></div>
                </div>

            </div>
        </div>
    )
}

{/* <div className="flex justify-center">
        <div className="flex-col justify-center m-8 border-b-2 w-2/3 cursor-pointer">

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
    </div> */}