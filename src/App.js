import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import List from './pages/list/List';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/list' element={<List />} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
