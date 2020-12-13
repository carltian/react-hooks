import React, { useState, useReducer } from 'react';

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#usereducer
 * 1.相当于reducer
 * 2.与redux中的reducer不同的是，它的状态不是组件共享的，就相当于一个复杂版本的useState
 *
 * React 会确保 dispatch 函数的标识是稳定的，并且不会在组件重新渲染时改变
 * 在某些场景下，useReducer 会比 useState 更适用，
 * 例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。
 * 并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。
 */
const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                count: state.count + 1
            };
        }
        case 'MINUS': {
            return {
                count: state.count - 1
            };
        }
        case 'MULTIPLY': {
            return {
                count: state.count * action.payload.number
            };
        }

        case 'DIVIDE': {
            return {
                count: state.count / action.payload.number
            };
        }
    }
};

function Counter1 () {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>count: {state.count}</div>
            <button
                onClick={() => {
                    dispatch({
                        type: 'ADD'
                    });
                }}
            >
        +
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'MINUS'
                    });
                }}
            >
        -
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'MULTIPLY',
                        payload: {
                            number: 2
                        }
                    });
                }}
            >
        *
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'DIVIDE',
                        payload: {
                            number: 2
                        }
                    });
                }}
            >
        /
            </button>
        </>
    );
}

function Counter2 () {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>count: {state.count}</div>
            <button
                onClick={() => {
                    dispatch({
                        type: 'ADD'
                    });
                }}
            >
        +
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'MINUS'
                    });
                }}
            >
        -
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'MULTIPLY',
                        payload: {
                            number: 2
                        }
                    });
                }}
            >
        *
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'DIVIDE',
                        payload: {
                            number: 2
                        }
                    });
                }}
            >
        /
            </button>
        </>
    );
}

export default () => (
    <>
        <Counter1 />
        <Counter2 />
    </>
);
