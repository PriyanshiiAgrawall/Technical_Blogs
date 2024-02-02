import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
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
        <div>
            <br></br>
            {page !== 1 &&
                <button onClick={previousClickHandler}>Previous</button>
            }
            <br></br>
            {page !== totalPages &&
                <button onClick={nextClickHandler}>Next</button>
            }<br></br>
            <span>Page </span>

            <span> {page}  </span>
            <span>of </span>
            <span>{totalPages}</span>
        </div>
    );
}

export default PageInation;