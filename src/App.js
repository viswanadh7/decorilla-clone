import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Pricing from './components/Pricing.jsx'
import Style from './components/Style.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/style' element={<Style />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
