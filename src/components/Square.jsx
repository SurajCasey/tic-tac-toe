import React from 'react'
import IconX from '../assets/icon-x.svg'
import IconO from '../assets/icon-o.svg'

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-36 h-36 bg-semi-dark-navy flex items-center justify-center 
      rounded-xl hover:scale-105 transition-transform cursor-pointer  shadow-[0_8px_0_0_#10212A]"
    >
      {value === 'X' && <img src={IconX} alt="X" className="w-16 h-16" />}
      {value === 'O' && <img src={IconO} alt="O" className="w-16 h-16" />}
    </button>
  )
}

export default Square
