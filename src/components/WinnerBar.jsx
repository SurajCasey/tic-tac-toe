import React from 'react'
import { useNavigate } from 'react-router-dom'
import xIcon from '../assets/icon-x.svg'
import oIcon from '../assets/icon-o.svg'

const WinnerBar = ({ winner, roundMark, mode, onQuit, onNextRound }) => {
  if (!winner) return null;

  const navigate = useNavigate();

  const handleQuit = () => {
    onQuit();
    navigate('/');
  }

  const getHeading = () => {
    if (winner === 'Tie') return "ROUND TIED";
    if (mode === 'cpu') {
      return winner === "You" ? "You Won!" : "OH NO, YOU LOST...";
    } else {
      return winner === "P1" ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!";
    }
  };

  const getSubHeading = () => {
    if (winner === 'Tie') return "No one takes the round";
    return (
      <span>
        {roundMark === 'X' ? <img src={xIcon} alt="X" /> : <img src={oIcon} alt="O" />}
      </span>
    );
  }

  return (
    <div
      className={`winner-bar absolute w-screen h-[266px] z-10
        bg-semi-dark-navy flex flex-col
        justify-center items-center ${winner === 'Tie' ? 'gap-7': ''}`}
    >
      <div className={`text-silver font-bold ${winner === 'Tie' ? 'text-[40px]': '' }`}>
        <h2>{getHeading()}</h2>
      </div>
      {winner !== 'Tie' && (
        <div className='flex items-center gap-6'>
          <p>{getSubHeading()}</p>
          <p
            className={
              roundMark === 'X'
                ? 'text-light-blue font-bold text-[40px]'
                : roundMark === 'O'
                ? 'text-light-yellow font-bold text-[40px]'
                : ''
            }
          >
            TAKES THE ROUND
          </p>
        </div>
      )}
      <div className='flex gap-4'>
        <button
          onClick={handleQuit}
          className='font-bold bg-silver p-4 rounded-xl cursor-pointer
          shadow-[inset_0_-4px_0_0_#6B8997]'
        >
          QUIT
        </button>
        <button
          onClick={onNextRound}
          className={`font-bold bg-light-yellow p-4 rounded-xl cursor-pointer
          shadow-[inset_0_-4px_0_0_#CC8B13]`}
        >
          NEXT ROUND
        </button>
      </div>
    </div>
  )
}

export default WinnerBar