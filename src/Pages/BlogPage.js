import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
function BlogPage() {
    const [currentBlog, setCurrentBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const { loading, setLoading } = useContext(AppContext)
    let blogId = location.pathname.split('/').at(-1)
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    async function fetchBlogData() {
        setLoading(true)
        let blogUrl = `${newBaseUrl}get-blog?blogId=${blogId}`;

        try {

            // const blogUrl = `${baseUrl}?blogId=${blogId}`
            const response = await axios.get(blogUrl)
            const output = response.data;
            console.log(output);
            setCurrentBlog(output.blog)
            setRelatedBlogs(output.relatedBlogs)

        } catch (error) {
            console.log(error);
            setCurrentBlog(null)
            setRelatedBlogs([])

        }
        setLoading(false)
    }
    //agar blogId 
    useEffect(() => {
        if (blogId) {
            fetchBlogData()
        }
    }, [location.pathname])

    return (


        <div >

            <Header />
            <div>
                <button onClick={() => navigate(-1)} className="mt-[110px] border-4 rounded-md px-4 py-1 mx-[20px] mb-[20px]" >Back</button></div><div className="mt-[-5px]" >

                {loading ? (<Spinner />) :
                    (
                        currentBlog ?
                            (
                                <div>
                                    <Card post={currentBlog} />
                                    <h1 className="font-bold text-[28px] my-[20px] underline">Related Blogs</h1>
                                    {relatedBlogs.map((blog) => (<div key={blog.id}><Card post={blog} /></div>))}
                                </div>)
                            :
                            (<p>No Blogs Found</p>)


                    )}

            </div>

        </div >
    );
}

export default BlogPage;