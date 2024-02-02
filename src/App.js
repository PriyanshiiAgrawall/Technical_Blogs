
import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Spinner from './components/Spinner';
import PageInation from './components/Pageination';
import { AppContext } from './context/AppContext';
function App() {
  const { loading, fetchData } = useContext(AppContext)
  useEffect(() => {
    fetchData()
  }, [])
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

export default App;
