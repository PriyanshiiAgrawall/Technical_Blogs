import React from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageInation from "../components/Pageination";
function TagPage() {
    const navigation = useNavigate()
    const [location, setLocation] = useLocation()
    let tag = location.pathname.split("/").at(-1).replace("-", " ")
    return (
        <div ><Header />
            <button onClick={navigation(-1)} >Back</button>
            <h2>Blogs Tagged <span>#{tag}</span></h2>
            <Blogs />
            <PageInation />
        </div>
    );
}

export default TagPage;