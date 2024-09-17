import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementBy, reset } from '../../../features/counters/counterSlice';

const Counter = ({ counter }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(counter.id));
    };

    const handleDecrement = () => {
        dispatch(decrement(counter.id));
    };

    const handleIncrementByFive = () => {
        dispatch(incrementBy({ id: counter.id, amount: 5 }));
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div className='m-5 flex flex-col items-center'>
            <div className='w-[250px] bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg rounded-lg p-4 text-center'>
                <h1 className='text-3xl font-extrabold text-white mb-3'>{counter.value}</h1>
                <div className='flex justify-center space-x-3 mb-4'>
                    <button className='px-3 py-2 rounded-full bg-green-400 text-white hover:bg-green-500 shadow-lg' onClick={handleIncrement}>+</button>
                    <button className='px-3 py-2 rounded-full bg-red-400 text-white hover:bg-red-500 shadow-lg' onClick={handleDecrement}>-</button>
                </div>
                <div className='flex justify-between'>
                    <button className='px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-500 shadow-md' onClick={handleIncrementByFive}>+5</button>
                    <button className='px-4 py-2 rounded bg-yellow-400 text-white hover:bg-yellow-500 shadow-md' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
