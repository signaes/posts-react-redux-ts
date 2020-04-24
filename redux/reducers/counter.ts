import { CounterAction, INCREMENT, DECREMENT } from '../actions/counter';

interface CounterState {
    value: number;
}

const counterReducer: (state: CounterState, action: CounterAction) => CounterState = (state = { value: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
            return {...state}
    }
}

export default counterReducer