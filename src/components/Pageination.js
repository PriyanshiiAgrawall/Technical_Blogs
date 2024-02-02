import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css"
function PageInation() {
    let { page, totalPages, setPage, setPost, handlePageChange } = useContext(AppContext)
    function previousClickHandler() {
        setPage(--page)
        handlePageChange(page)

    }
    function nextClickHandler() {
        setPage(++page)
        handlePageChange(page)

    }
    return (
        <div className=" w-full fixed bottom-0 bg-white flex justify-center items-center border-2">
            <div className=" flex justify-between max-w-[750px] w-11/12 py-2 ">
                <div className="flex gap-x-2">
                    {page !== 1 &&
                        <button onClick={previousClickHandler} className="border-2 rounded-md px-4 py-1" >Previous</button>
                    }

                    {page !== totalPages &&
                        <button onClick={nextClickHandler} className="border-2 rounded-md px-4 py-1">Next</button>
                    }
                </div>
                <p>Page <span className="font-bold">{page}</span> of <span className="font-bold"> {totalPages}</span></p>
            </div>
        </div>
    );
}

export default PageInation;