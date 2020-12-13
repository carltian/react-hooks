import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'antd';

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#useref
 * 1.useRef返回一个可变的ref对象，ref.current指向初始化的值。
 * 2.可以给ref.current赋值
 * 3.useRef可以替代函数组件中没有实例变量的问题
 */

// 1.useRef返回一个可变的ref对象，ref.current指向初始化的值。
// 2.可以给ref.current赋值
// 3.useRef可以替代函数组件中没有实例变量的问题

function Edit () {
    const [count, setCount] = useState(0);
    const [lodaing, setLoading] = useState(false);
    const inputRef = useRef('');
    const timerRef = useRef(null);
    const fetchRef = useRef(false);

    useEffect(() => {
        const LOOPTIME_MS = 1000;
        timerRef.current = setInterval(() => {
            inputRef.current.value = 'hello';
        }, LOOPTIME_MS);
        return () => {
            clearInterval(timerRef.current);
        }
    }, []);

    /**
     * 当 ref 对象内容发生变化时，useRef 并不会通知你.变更 .current 属性不会引发组件重新渲染。
     * 如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现
     * 这里不做示例，详情请参阅文档
     * @see https://react.docschina.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
     */
    const handleClick = () => {
        if (fetchRef.current === true) {
            return;
        }
        setLoading(true);
        fetchRef.current = true;
        setTimeout(() => {
            setLoading(false);
            fetchRef.current = false;
        }, 3000);
    }
    return (
        <>
            <input type="text" value={count} ref={inputRef} />
            <Button loading={lodaing} onClick={handleClick} >拉取网络数据</Button>
        </>
    )
}

export default Edit;
