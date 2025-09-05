import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

// importing pages
import GamePage from "./pages/GamePage"
import MainPage from "./pages/MainPage"

function App() {

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
