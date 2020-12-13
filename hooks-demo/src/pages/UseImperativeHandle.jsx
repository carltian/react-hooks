import React, {
    useRef,
    useEffect,
    useImperativeHandle,
    forwardRef,
    useState
} from 'react';

/**
 * @see https://react.docschina.org/docs/hooks-reference.html#useimperativehandle
 * useImperativeHandle(ref, createHandle, [deps])
 * 该钩子函数还有第三个参数，如果里面涉及到某个变化的值，只有当第三个参数发生改变时，父组件接收到的该值才会发生改变
 * useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
 * 在大多数情况下，应当避免使用 ref 这样的命令式代码。
 *
 *  1.以前是父组件可以直接拿到子组件的dom
 *  2.父组件通过子组件暴露出来的接口来操作子组件，组件解耦。迪米特法则(最少知识原则)。
 */
let Child = function Child (props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        setValue: (value) => {
            inputRef.current.value = value;
        }
    }));
    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    );
}

Child = forwardRef(Child);

function Parent () {
    const childRef = useRef(null);
    const [value, setValue] = useState('');
    useEffect(() => {
    // childRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        childRef.current.setValue(value);
    };
    console.log(childRef)
    return (
        <>
            <div>
        parent:
                <input value={value} onChange={handleChange} />
            </div>
            <div>
        children: <Child ref={childRef} />
            </div>
        </>
    );
}

export default Parent;
