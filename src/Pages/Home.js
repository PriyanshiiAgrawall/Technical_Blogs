import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageInation from "../components/Pageination";
import { AppContext } from "../context/AppContext";

function Home() {
    const { loading } = useContext(AppContext)
    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
            <Header />
            {
                loading ? (<Spinner />) : (<Blogs />)
            }


            <PageInation />
        </div>
    );
}

export default Home;