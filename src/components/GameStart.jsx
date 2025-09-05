import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.svg'
import Restart from '../assets/icon-restart.svg'
import Board from './Board'
import RestartBar from './RestartBar'
import { checkWinner, checkTie, cpuMove } from '../utils/gameLogic'

const GameStart = ({ playerMark = 'X', mode = 'cpu', setWinner: setParentWinner, setRoundMark }) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)
  const [ties, setTies] = useState(0)
  const [showRestart, setShowRestart] = useState(false)

  // Handle cell click
  const handleClick = (index) => {
    if (board[index]) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  // CPU move
  useEffect(() => {
    if (mode === 'cpu' && turn !== playerMark && !checkWinner(board) && !checkTie(board)) {
      const move = cpuMove(board, turn, playerMark)
      if (move !== undefined) {
        setTimeout(() => handleClick(move), 500)
      }
    }
  }, [turn, board])

  // Check winner or tie
  useEffect(() => {
    const result = checkWinner(board)
    if (result) {
      setRoundMark(result)
      setParentWinner(
        mode === 'cpu'
          ? result === playerMark
            ? 'You'
            : 'CPU'
          : result === 'X'
            ? 'P1'
            : 'P2'
      )
      if (result === 'X') setXScore(x => x + 1)
      else if (result === 'O') setOScore(o => o + 1)
    } else if (checkTie(board)) {
      setRoundMark(null)
      setParentWinner('Tie')
      setTies(t => t + 1)
    }
  }, [board])

  // Reset board for restart
  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setTurn('X')
    setParentWinner(null)
    setRoundMark(null)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6">
      {/* Status bar */}
      <div className="flex items-center justify-between w-full">
        <img src={Logo} alt="Tic Tac Toe" />
        <div className="text-silver font-bold text-lg py-4 px-7 bg-semi-dark-navy rounded-lg">
          <span className='text-silver mr-3 text-[20px]'> 
            {turn}
          </span>
          TURN
        </div>
        <button onClick={() => setShowRestart(true) } 
          className='cursor-pointer'>
          <img src={Restart} alt="Restart" />
        </button>
      </div>

      {/* Board */}
      <Board board={board} onClick={handleClick} />

      {/* Scores */}
      <div className="grid grid-cols-3 gap-5 justify-between text-center">
        <div className="w-[140px] h-18 bg-light-blue px-4 py-2 rounded-xl text-sm">
          {mode === 'cpu' ? `X ${playerMark === 'X' ? '(You)' : '(CPU)'}` : 'X (P1)'}
          <br /> 
          <span className='font-bold text-2xl'>
            {xScore}
          </span>
        </div>
        <div className="bg-silver px-4 py-2 rounded-xl text-dark-navy text-sm">
          Ties <br /> 
          <span className='font-bold text-2xl'>
            {ties}
          </span>
        </div>
        <div className="bg-light-yellow px-4 py-2 rounded-xl text-dark-navy text-sm">
          {mode === 'cpu' ? `O ${playerMark === 'O' ? '(You)' : '(CPU)'}` : 'O (P2)'}
          <br /> 
          <span className='font-bold text-2xl'>
            {oScore}
          </span>
        </div>
      </div>

      {/* RestartBar */}
      {showRestart && (
        <RestartBar 
          onCancel={() => setShowRestart(false)}
          onConfirm={handleReset}
          />
      )}
    </div>
  )
}

export default GameStart