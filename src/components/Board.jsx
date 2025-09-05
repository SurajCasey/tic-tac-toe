import React from 'react'
import Square from './Square'

const Board = ({board, onClick}) => {
  return (
    <div
        className='grid grid-cols-3 grid-rows-3 gap-5'
    >
        {board.map((cell, i) =>(
            <Square key={i} value={cell} 
            onClick={()=> onClick(i)}/>
        ))}
    </div>
  )
}

export default Board