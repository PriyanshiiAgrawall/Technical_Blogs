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
    let blogId = location.pathname.split('/').at[-1]

    async function fetchBlogData() {
        setLoading(true)
        try {

            const blogUrl = `${baseUrl}?blogId=${blogId}`
            const output = await axios.get(blogUrl).data
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


        <div>
            <button onClick={() => navigate(-1)} className="mt-[100px]">Back</button>
            <Header />
            {loading ? (<Spinner />) : (
                currentBlog ? (<Card currentBlog={currentBlog} />
                ) : (<p>No Blogs Found</p>)
            )}
            <h1>Related Blogs</h1>
            {
                relatedBlogs.length === 0 ?
                    (<div><p>No Related Blogs Found</p></div>)
                    :
                    (relatedBlogs.map((blog) => (<div key={blog.id}><Card post={blog} /></div>)))
            }



        </div>
    );
}

export default BlogPage;