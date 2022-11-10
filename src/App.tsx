import React from 'react';
import './components/FontawesomeIcons/index'
import Login from './pages/Login/Login';
import './App.scss'
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/*' element={<Layout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
