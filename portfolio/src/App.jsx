import { useState } from 'react'
import './App.css'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

function App() {

  return (
    <div className='portfolio-container'>
      <div className='content-wrapper'>
        <LeftPanel/>
        <RightPanel/>
      </div>
    </div>
  )
}

export default App
