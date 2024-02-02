import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
function Blogs() {
    const { posts, setPage, page, fetchData } = useContext(AppContext)
    console.log(posts);
    //agar posts ki length 0 hai toh No Post Found likhs aa jaega aor agar non-zero hai toh render karenge posts
    return (
        <div>
            {
                posts.length === 0 ?
                    (<div><p>No Posts Found</p></div>)
                    :
                    (posts.map((post) => (
                        <div key={post.id}>
                            <p className="font-bold">{post.title}</p>
                            <p>By<span>{post.author}</span>
                                on <span>{post.category}</span>
                            </p>
                            <p>Posted On{post.date}</p>
                            <p>{post.content}</p>
                            <div>{post.tags.map((tag, index) => {
                                return <a key={index} href="#">{`#${tag}   `}</a>

                            })}</div>

                        </div>

                    )))
            }
        </div>
    )
}

export default Blogs;