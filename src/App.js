
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
    <div className="App">
      <Header />
      {
        loading ? (<Spinner />) : (<Blogs />)
      }


      <PageInation />
    </div>
  );
}

export default App;
