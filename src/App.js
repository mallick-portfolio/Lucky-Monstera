import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
