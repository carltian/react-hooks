import React, { useState, useEffect } from 'react';

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#usestate
 * useState与setState的区别
 * 不会进行合并，而是进行状态的替换，这在简单类型没有什么问题，对于复杂类型如对象使用的时候需要注意。
 * 使用Object.is算法比较状态的前后的值。和 === 的区别在于对于0和-0的判断，以及NaN的判断
 * 对于相同的值，不会重新渲染组件，相当于shouldComponentUpdate
 * useState的参数可以是一个函数 useState(() => expensiveCalc(props.xxx))
 */

function Counter () {
    const [count, setCount] = useState(4);
    useEffect(() => {
    // Update the document title using the browser API
        document.title = `Change value ${count}`;
    });
    return (
        <>
            <p>
        count: {count}, random: {Math.random()}
            </p>
            <button onClick={() => setCount(count < 5 ? count + 1 : count)}>
        点击这里加1
            </button>
            <button onClick={() => setCount(count - 1)}>点击这里减1</button>
        </>
    );
}

// 复杂类型
function Counter2 () {
    const [info, setInfo] = useState({ name: '小鸡', age: 1 });
    const changeName = () => {
        setInfo({
            ...info,
            name: '小鸟'
        });
    };
    return (
        <>
            <p>name: {info.name}</p>
            <p>age: {info.age}</p>
            <button onClick={changeName}>我只是想改变名字</button>
        </>
    );
}
export default Counter;
