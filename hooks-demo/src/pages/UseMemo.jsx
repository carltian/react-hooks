import React, { useState, useMemo, memo, useCallback, useEffect } from 'react';

const fib = (count) => {
    if (count <= 1) {
        return count;
    } else if (count === 2) {
        return 2;
    }
    return fib(count - 1) + fib(count - 2);
};

const computeExpensiveValue = (count) => {
    const v = fib(count);
    return v;
}

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#usememo
 * 1.memo是一个高阶函数，用于防止组件重复渲染。
 * 2.useMemo是一个hooks，用于缓存某个需要复杂计算的值。
 * 3.useMemo监听某个值，当该值发生变化时才重新计算。
 * 4.可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。
 * 5.传入 useMemo 的函数会在渲染期间执行。不要在这个函数内部执行与渲染无关的操作。
 */

function Parent () {
    const [count, setCount] = useState(40);
    const [count2, setCount2] = useState(10);
    console.time('calc');
    const result = useMemo(() => computeExpensiveValue(count), [count]);
    // const result = fib(count);
    console.timeEnd('calc');

    return (
        <>
            <p>rsult: {result}</p>
            <div>
                <input type="number" disabled value={count} />
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <br />
                <input type="number" disabled value={count2} />
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <button onClick={() => setCount2(count2 - 1)}>-</button>
            </div>
        </>
    )
}

export default Parent;
