// Game logic functions for Tic Tac Toe

const WIN_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]              // diagonals
]

// Check winner
export const checkWinner = (board) => {
  for (let combo of WIN_COMBINATIONS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] // 'X' or 'O'
    }
  }
  return null
}

// Check for tie
export const checkTie = (board) => {
  return board.every(cell => cell !== null)
}

// Simple CPU AI move
export const cpuMove = (board, cpuMark, playerMark) => {
  // Try winning
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const test = [...board]
      test[i] = cpuMark
      if (checkWinner(test) === cpuMark) return i
    }
  }

  // Block player
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const test = [...board]
      test[i] = playerMark
      if (checkWinner(test) === playerMark) return i
    }
  }

  // Take center
  if (!board[4]) return 4

  // Random move
  const available = board.map((v, i) => (v ? null : i)).filter(v => v !== null)
  return available[Math.floor(Math.random() * available.length)]
}
