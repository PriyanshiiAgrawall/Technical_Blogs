import React from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageInation from "../components/Pageination";

function CategoryPage() {
    const navigation = useNavigate()
    const location = useLocation()
    let category = location.pathname.split("/").at(-1)
    return (

        <div ><Header />
            <button onClick={() => navigation(-1)} className="mt-[110px] border-4 rounded-md px-4 py-1 mx-[20px] mb-[20px]">Back</button>
            <h2 className="font-bold text-[23px] underline">Blogs On <span className="text-blue-700 "  >{category}</span></h2><div className="mt-[-80px]">
                <Blogs />
            </div>
            <PageInation />
        </div>
    );
}

export default CategoryPage;