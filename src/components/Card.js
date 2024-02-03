import React from "react";
import { NavLink } from "react-router-dom";
function Card({ post }) {
    console.log(post)

    return (
        <div >

            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold text-[21px]">{post.title}</span></NavLink>

            <p className="text-[14px] mt-[5px]">By<span className="italic">{post.author} </span>


                on

                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}> <span className="underline font-bold">{post.category}</span></NavLink>
            </p>
            <p className="text-[14px] mt-[2px]">Posted On {post.date}</p>
            <p className="text-[17px] py-1 mt-[10px]">{post.content}</p>
            <div>{post.tags.map((tag, index) => {
                return <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index} >
                    <span className="text-[16px] font-semibold underline text-blue-700 cursor-pointer">{` #${tag} `}</span></NavLink>

            })}</div>

        </div>



    );
}

export default Card;