import React from 'react'

const RestartBar = ({ onCancel, onConfirm}) => {
    return (
        <div 
            className='absolute w-screen h-[266px] z-10 bg-semi-dark-navy 
            flex flex-col justify-center items-center'
        >
            <div className='text-silver font-bold text-[40px]' >
                <h2>RESTART GAME ?</h2>
            </div>
               
            <div className='flex gap-4'>
                <button 
                    onClick={onCancel}
                    className='font-bold bg-silver p-4 rounded-xl cursor-pointer
                    shadow-[inset_0_-4px_0_0_#6B8997]'
                >
                    NO, CANCEL
                </button>
                <button 
                    onClick={onConfirm}
                    className={`font-bold bg-light-yellow p-4 rounded-xl cursor-pointer
                    shadow-[inset_0_-4px_0_0_#CC8B13]`}
                >
                    YES, RESTART
                </button>
            </div>
        </div>
    )
}

export default RestartBar
