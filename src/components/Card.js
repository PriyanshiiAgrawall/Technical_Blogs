import React from "react";
function Card({ post }) {
    console.log(post)
    return (
        <div>

            <div key={post.id}>
                <p className="font-bold text-[20px]">{post.title}</p>

                <p className="text-[14px] mt-[5px]">By<span className="italic">{post.author} </span>
                    on <span className="underline font-bold">{post.category}</span>
                </p>
                <p className="text-[14px] mt-[2px]">Posted On {post.date}</p>
                <p className="text-[17px] py-1 mt-[10px]">{post.content}</p>
                <div>{post.tags.map((tag, index) => {
                    return <a key={index} href="#" className="text-blue-700 underline font-bold text-[14px] mr-[6px]">{`#${tag}   `}</a>

                })}</div>

            </div>


        </div>
    );
}

export default Card;