import React, { useState, useContext, createContext } from 'react';

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#usecontext
 *  1.取代了复杂的Context.Consumer
 *  2.相对于static context = Context
 *  3.配合useReducer相当于redux
 *
 * 当组件上层最近的 <MyContext.Provider> 更新时，
 * 该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。
 * 即使祖先使用 React.memo 或 shouldComponentUpdate，
 * 也会在组件本身使用 useContext 时重新渲染
 */

const parentContext = createContext();
function Parent (props) {
    const countArr = useState({
        count1: 0,
        count2: 1
    });
    return (
        <parentContext.Provider value={countArr}>
            {props.children}
        </parentContext.Provider>
    )
}

function Child () {
    const countArr = useContext(parentContext);
    const [countObj, setConuntObj] = countArr;
    const changeCount1 = () => {
        setConuntObj({
            ...countObj,
            count1: countObj.count1 + 1
        })
    }

    const changeCount2 = () => {
        setConuntObj({
            ...countObj,
            count2: countObj.count2 + 2
        })
    }
    return (
        <>
            <div>
          count1: {countObj.count1} <button onClick={changeCount1}>+1</button>
            </div>
            <div>
          count2: {countObj.count2} <button onClick={changeCount2}>+2</button>
            </div>
        </>
    );
}

export default () => (
    <>
        <Parent>
            <Child />
        </Parent>
    </>
);
