import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <Router>
      <Navbar/>
      <main style={{ paddingTop: '20px'}}>

      </main>
    </Router>
  )
}

export default App
