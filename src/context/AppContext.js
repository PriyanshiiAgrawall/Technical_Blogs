import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

export function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [posts, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const navigate = useNavigate()
    //functionality addition in order to fill data in there state variables

    async function fetchData(page = 1, tag = null, category) {
        setLoading(true)
        //normal url
        let url = `${baseUrl}?page=${page}`
        //abb yeh normal url change ho sakta hai agar humare pass tag ya category present hai is phele tag aor category ko mangwa liya fetchData function me
        if (tag) {
            url += `&tag=${tag}`
            console.log(url);
        }
        if (category) {
            url += `&category=${category}`
            console.log(url);
        }
        try {


            console.log(url);
            const response = await axios.get(url)
            const output = response.data;
            if (!output.posts || output.posts.length === 0)
                throw new Error("Something Went Wrong");
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
    //hume abb page,category aor tags sabb pass karne padenge
    function handlePageChange(page) {
        navigate({ search: `?page=${page}` });
        setPage(page)
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
