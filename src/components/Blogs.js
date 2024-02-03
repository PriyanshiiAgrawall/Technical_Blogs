import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
function Blogs() {
    const { posts } = useContext(AppContext)
    console.log(posts);
    //agar posts ki length 0 hai toh No Post Found likhs aa jaega aor agar non-zero hai toh render karenge posts
    return (
        <div className="w-11/12 max-w-[750px] py-8 flex flex-col gap-y-7 mt-[70px] mb-[70px]">
            {
                posts.length === 0 ?
                    (<div><p>No Posts Found</p></div>)
                    :
                    (posts.map((post) => (<Card post={post} key={post.id} />)))
            }
        </div>
    )
}

export default Blogs;