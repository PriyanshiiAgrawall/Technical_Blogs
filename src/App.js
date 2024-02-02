
import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Spinner from './components/Spinner';
import PageInation from './components/Pageination';
import { AppContext } from './context/AppContext';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
function App() {
  const { loading, fetchData } = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  useEffect(() => {
    //for tags
    //seachParams current url(query) par jaega aor page key ki value fetch karke laega aor page variable me daal dega
    const page = searchParams.get("page") ?? 1
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ")
      fetchData(Number(page), tag)
    }
    //for category
    else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ")
      fetchData(Number(page), null, category)
    }
    //normal case- just for pages
    else {
      fetchData(Number(page))
    }


  }, [location.pathname, location.search])
  return (
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header />
    //   {
    //     loading ? (<Spinner />) : (<Blogs />)
    //   }


    //   <PageInation />
    // </div>
    <Routes>
      {/* blogId tag and category dynamic parameters hain jo har blog tag and category respectively ke sath change hongi
      colon ke aage jo bhi likha hota hai usse automatically dynamic parameter maan lete hain */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogPage />}></Route>
      <Route path="/tags/:tag" element={<TagPage />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>
    </Routes>
  );
}

export default App;
