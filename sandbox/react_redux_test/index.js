import { createStore, compose, applyMiddleware, bindActionCreators } from 'redux';

const initialState = { value: 0 };

const INCREMENT = 'INCREMENT'
const ADD = 'ADD';

const incrementAction = { type: 'INCREMENT' }
const increment = (amount) => ({ type: INCREMENT, payload: amount });

const add = (amount) => ({ type: ADD, payload: amount });


const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { value: state.value + 1 };
    }
    if (action.type === ADD) {
        return { value: state.value + action.payload };
    }

    return state;
}

const store = createStore(reducer);

store.dispatch(increment());

console.log(store.getState());