import { useState } from 'react'
import './App.css'
import LeftPanel from './components/LeftPanel'

function App() {

  return (
    <div className='portfolio-container'>
      <div className='content-wrapper'>
        <LeftPanel/>
      </div>
    </div>
  )
}

export default App
