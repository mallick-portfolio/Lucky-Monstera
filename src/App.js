import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
