import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";
export const AppContext = createContext();

export function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [posts, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    //functionality addition in order to fill data in there state variables

    async function fetchData(page = 1) {
        setLoading(true)
        try {
            let url = `${baseUrl}?page=${page}`
            console.log(url);
            const response = await axios.get(url)
            const output = response.data;
            console.log(output);

            setPage(output.page)
            setTotalPages(output.totalPages)
            setPost(output.posts)
        }
        catch (error) {
            console.log(error.message);
            setPage(1)
            setPost([])
            setTotalPages(null)
        }
        setLoading(false)
    }


    //jab next ya previous ka button press karte hain toh data of blogs ,context ka yeh handlePageChange vala function lata hai 
    function handlePageChange(page) {
        setPage(page)
        fetchData(page)
    }






    //yeh send vo sara data hai jo eksath components ko bhejna hai iss context se
    const value = {
        loading,
        posts,
        page,
        totalPages,
        setLoading,
        setPost,
        setPage,
        setTotalPages,
        fetchData,
        handlePageChange
    }

    //children ko vo value provide karo jo AppContext me padi hai.
    //children vo sab hai jo <AppContextProvider></AppContextProvider> ke andar likha hai.
    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}
