import React, { useState, useEffect, useLayoutEffect } from 'react';

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#uselayouteffect
 * 调用时机的不同
 * 1.useEffect的调用时机
 * 在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用
 *
 * 2.useLayoutEffect的调用时机
 * 在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染
 *
 *  提示
    如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，
    则需要注意 useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。
    但是，我们推荐你一开始先用 useEffect，只有当它出问题的时候再尝试使用 useLayoutEffect。
 */
function Input () {
    const [value, setValue] = useState('');
    const [lengths, setLengths] = useState(value.length);

    useEffect(
        () => {
            if (value.length > 10) {
                setValue(value.substring(0, 10));
            }
            setLengths(value.length);
        },
        [value]
    );

    const handleChage = (e) => {
        const { value } = e.target;

        setValue(value);
    };
    console.log('render');
    return (
        <>
            <input
                value={value}
                type="text"
                placeholder="最大长度为10"
                onChange={handleChage}
            />
            <p>length: {lengths}</p>
        </>
    );
}

export default Input;
