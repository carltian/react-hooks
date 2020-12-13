import React, { useState, useMemo, memo, useCallback, useEffect } from 'react';

function Counter ({ count }) {
    return (
        <div>
            <p>count: {count}</p>
        </div>
    );
}

let Child = function Child ({ onChange }) {
    console.log('渲染Child');
    const [value, setValue] = useState(0);
    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        onChange && onChange(value);
    };
    return (
        <div>
            <input value={value} onChange={handleChange} />
        </div>
    );
}
Child = memo(Child);

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#usecallback
 * 1.useCallback用于缓存一个函数
 * 2.useCallback(fn, deps) 等价于 useMemo(() => fn, deps).区别在于useMemo返回的是函数运行的结果，useCallback返回的是函数
 * 3.依赖项数组不会作为参数传给回调函数
 */
function Parent () {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [result, setResult] = useState(count);
    useEffect(() => {
        setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            setCount2((prevCount) => prevCount + 1);
        }, 1000);
    }, []);

    // 使用useCallback可以控制Child组件渲染
    const handleChange = useCallback(() => {
        setResult((count) => count + 1);
    }, []);

    // 不使用useCallback时 Child组件每次都会重新渲染
    // const handleChange = () => { setResult(count + 1) };

    return (
        <>
            <Counter count={count} />
            <Counter count={count2} />
            <Child onChange={handleChange} />
            <p>result: {result}</p>
        </>
    );
}

export default Parent;
