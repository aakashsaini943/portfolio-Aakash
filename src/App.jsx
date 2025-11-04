import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './component/navbar'
import Footer from './component/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;