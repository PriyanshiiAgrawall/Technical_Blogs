import React from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageInation from "../components/Pageination";

function CategoryPage() {
    const navigation = useNavigate()
    const [location, setLocation] = useLocation()
    let category = location.pathname.split("/").at(-1).replace("-", " ")
    return (

        <div ><Header />
            <button onClick={navigation(-1)} >Back</button>
            <h2>Blogs On <span>#{category}</span></h2>
            <Blogs />
            <PageInation />
        </div>
    );
}

export default CategoryPage;