import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export const useBlogs = () : {loading: boolean; blogs : Blog[]}=>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers :{
                Authorization : localStorage.getItem("token")
            }
        })
        .then((res)=>{
                setBlogs(res.data.allPosts);
                setLoading(false);
            })
    },[]);

    return {
        loading,
        blogs
    }
}


export const useBlog = ({id} : {id : string})=>{

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/get/${id}`,{
            headers :{
                Authorization : localStorage.getItem("token")
            }
        })
        .then((res)=>{
            const post = res.data.blog;
            setLoading(false)
            setBlog(post)
        })
    },[id])

    return{
        loading,
        blog
    }
    
}