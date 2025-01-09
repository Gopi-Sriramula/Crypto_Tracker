import React from 'react'
import "./App.css";
import { HashRouter, Route, Routes,} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import SelectedCoin from './pages/SelectedCoin';
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/coin/:id" element={<SelectedCoin/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App