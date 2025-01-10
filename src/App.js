import React from 'react'
import "./App.css";
import { HashRouter, Route, Routes,} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import SelectedCoin from './pages/SelectedCoin';
import ComparePage from './pages/ComparePage';
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/coin/:id" element={<SelectedCoin/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App