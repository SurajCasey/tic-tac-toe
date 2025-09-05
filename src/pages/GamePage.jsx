import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GameStart from '../components/GameStart'
import WinnerBar from '../components/WinnerBar'

const GamePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { playerMark, mode } = location.state || { playerMark: 'X', mode: 'cpu' }

  const [winner, setWinner] = useState(null)
  const [roundMark, setRoundMark] = useState(null)

  const handleQuit = () => {
    setWinner(null)
    setRoundMark(null)
    navigate('/')
  }

  const handleNextRound = () => {
    setWinner(null)
    setRoundMark(null)
  }

  return (
    <div className="h-screen bg-dark-navy flex justify-center items-center relative">
      <WinnerBar
        winner={winner}
        roundMark={roundMark}
        mode={mode}
        onQuit={handleQuit}
        onNextRound={handleNextRound}
      />
      <GameStart
        playerMark={playerMark}
        mode={mode}
        setWinner={setWinner}
        setRoundMark={setRoundMark}
      />
    </div>
  )
}

export default GamePage