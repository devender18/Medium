import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export function Blog(){
    const {id}  = useParams();
    const {loading, blog} = useBlog({id: id || ""});

    if (loading || !blog){
        return <div>
            <BlogSkeleton />
            
        </div>
    }
    return (

        <div>
            <Appbar />
            <FullBlog title={blog.title} content={blog.content} date="Oct 22, 2024" name={blog.author.name?blog.author.name:"anonymous"} />
        </div>
    )
}