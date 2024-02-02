import React from "react";
import { NavLink } from "react-router-dom";
function Card({ post }) {
    console.log(post)
    return (
        <div>

            <div><NavLink to={`/blog/${post.id}`}>
                <p className="font-bold text-[20px]">{post.title}</p></NavLink>

                <p className="text-[14px] mt-[5px]">By<span className="italic">{post.author} </span>


                    on

                    <NavLink to={`/category/${post.category.replaceAll(" ", "-")}`}> <span className="underline font-bold">{post.category}</span></NavLink>
                </p>
                <p className="text-[14px] mt-[2px]">Posted On {post.date}</p>
                <p className="text-[17px] py-1 mt-[10px]">{post.content}</p>
                <div>{post.tags.map((tag, index) => {
                    <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index} >
                        <span className="text-blue-700 underline font-bold text-[14px] mr-[6px]">#{tag}</span></NavLink>

                })}</div>

            </div>


        </div>
    );
}

export default Card;