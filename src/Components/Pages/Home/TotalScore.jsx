import React from 'react';

const TotalScore = ({ count = 0 }) => {
    return (
        <div className='w-[350px] m-auto flex justify-center items-center'>
            <div className='p-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out'>
                <h1 className='text-5xl font-bold text-white text-center'>{count}</h1>
                <p className='text-lg text-white text-center mt-2 opacity-70'>Total Score</p>
            </div>
        </div>
    );
}

export default TotalScore;
