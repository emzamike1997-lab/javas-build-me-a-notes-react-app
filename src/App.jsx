import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Notes from './components/Notes'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Build Me A Notes React App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Notes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Notes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App