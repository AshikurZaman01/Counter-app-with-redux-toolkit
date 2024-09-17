import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
    ],
    totalScore: 0
}

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {

        increment: (state, action) => {
            const counterIndex = state.counters.findIndex((counter) => counter.id === action.payload);
            state.counters[counterIndex].value += 1;
        },

        decrement: (state, action) => {
            const counterIndex = state.counters.findIndex((counter) => counter.id === action.payload);
            state.counters[counterIndex].value -= 1;
        },

        // Use action.payload.amount to pass a dynamic increment value
        incrementBy: (state, action) => {
            const counterIndex = state.counters.findIndex((counter) => counter.id === action.payload.id);
            state.counters[counterIndex].value += action.payload.amount;
        },

        reset: (state) => {
            state.counters = initialState.counters;
        },

        calculateTotalScore: (state) => {
            state.totalScore = state.counters.reduce((sum, counter) => sum + counter.value, 0);
        }
    }
})

export const { increment, decrement, reset, calculateTotalScore, incrementBy } = countersSlice.actions;

export default countersSlice.reducer;
