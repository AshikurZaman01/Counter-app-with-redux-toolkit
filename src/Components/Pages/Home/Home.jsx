import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { calculateTotalScore, reset } from '../../../features/counters/counterSlice';

const Home = () => {

    const dispatch = useDispatch();

    const counters = useSelector((state) => state.counters.counters);
    const totalScore = useSelector((state) => state.counters.totalScore);

    const handleReset = () => {
        dispatch(reset())
    }

    useEffect(() => {
        dispatch(calculateTotalScore(totalScore))
    }, [dispatch, counters, totalScore])


    return (
        <div>

            <div className='container mx-auto p-5 text-center'>
                <h1 className='text-3xl font-bold'>Counter App</h1>
                <p className='text-xl'>Click the buttons to increase or decrease the counter</p>
            </div>

            <div>
                {
                    counters.map((counter) =>
                        <Counter key={counter.id} counter={counter}>

                        </Counter>)
                }
            </div>

            <div className='w-[350px] m-auto flex justify-center items-center'>
            <div className='p-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out'>
                <h1 className='text-5xl font-bold text-white text-center'>{totalScore}</h1>
                <p className='text-lg text-white text-center mt-2 opacity-70'>Total Score</p>
            </div>
        </div>

            <button onClick={handleReset}>Reset</button>

        </div>
    );
}

export default Home;
