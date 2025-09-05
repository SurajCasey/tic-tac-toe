import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import IconO from '../assets/icon-o.svg'
import IconX from '../assets/icon-x.svg'

const MainPage = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('O')

  return (
    <div className="flex justify-center items-center h-screen bg-dark-navy">
      <div className="flex flex-col items-center gap-10 w-[460px]">
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* Player pick */}
        <div className="text-silver bg-semi-dark-navy w-full text-center p-6 pb-7.5 
          rounded-2xl shadow-[inset_0_-8px_0_0_#10212A]">
          <h1 className="heading-xs">PICK PLAYER 1'S MARK</h1>
          <div className="flex justify-center mt-6 mb-4 bg-dark-navy rounded-2xl p-2">
            <button 
              onClick={() => setSelected('X')}
              className={`w-[198px] h-[54px] flex justify-center items-center transition-all duration-200 ease-in-out ${selected === 'X' ? 'bg-silver' : 'bg-transparent'} rounded-2xl`}
            >
              <img src={IconX} alt="X" className="w-8 h-8"/>
            </button>
            <button
              onClick={() => setSelected('O')} 
              className={`w-[198px] h-[54px] flex justify-center items-center transition-all duration-200 ease-in-out ${selected === 'O' ? 'bg-silver': 'bg-transparent'} rounded-2xl`}
            >
              <img src={IconO} alt="O" className="w-8 h-8 "/>
            </button>
          </div>
          <p className="body">REMEMBER: X GOES FIRST</p>
        </div>

        {/* New Game buttons */}
        <div className="flex flex-col w-full gap-5">
          <button
            onClick={() => navigate('/game', { state: { playerMark: selected, mode: 'cpu' } })}
            className="bg-light-yellow h-17 heading-s shadow-[inset_0_-8px_0_0_#CC8B13] 
              rounded-2xl hover:bg-light-yellow-hover hover:-translate-y-0.5
              transition-transform duration-100"
          >
            NEW GAME (VS CPU)
          </button>
          <button
            onClick={() => navigate('/game', { state: { playerMark: selected, mode: 'player' } })}
            className="bg-light-blue h-17 heading-s shadow-[inset_0_-8px_0_0_#118C87] 
              rounded-2xl hover:bg-light-blue-hover hover:-translate-y-0.5 
              transition-transform duration-100"
          >
            NEW GAME (VS PLAYER)
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
