
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import PageInation from './components/Pageination';
function App() {
  return (
    <div className="App">
      <Header />
      <Blogs />
      <PageInation />
    </div>
  );
}

export default App;
