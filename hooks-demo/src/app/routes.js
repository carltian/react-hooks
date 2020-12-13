import { routeMap } from './routeConfig';
import Main from '../pages/Main';
import Counter from '../pages/Counter';
import UseState from '../pages/UseState';
import UseEffect from '../pages/UseEffect';
import UseLayoutEffect from '../pages/UseLayoutEffect';
import UseRef from '../pages/UseRef';
import UseContext from '../pages/UseContext'
import UseReducer from '../pages/UseReducer';
import UseImperativeHandle from '../pages/UseImperativeHandle';
import UseCallback from '../pages/UseCallback';
import UseMemo from '../pages/UseMemo';
import UseUserInfo from '../pages/UseUserInfo';
import ContextReducer from '../pages/ContextReducer';

const routes = [
    {
        ...routeMap.main,
        component: Main
    },
    {
        ...routeMap.counter,
        component: Counter
    },
    {
        ...routeMap.useState,
        component: UseState
    },
    {
        ...routeMap.useEffect,
        component: UseEffect
    },
    {
        ...routeMap.useLayoutEffect,
        component: UseLayoutEffect
    },
    {
        ...routeMap.useRef,
        component: UseRef
    },
    {
        ...routeMap.useContext,
        component: UseContext
    },
    {
        ...routeMap.useReducer,
        component: UseReducer
    },
    {
        ...routeMap.useImperativeHandle,
        component: UseImperativeHandle
    },
    {
        ...routeMap.useCallback,
        component: UseCallback
    },
    {
        ...routeMap.useMemo,
        component: UseMemo
    },
    {
        ...routeMap.useUserInfo,
        component: UseUserInfo
    },
    {
        ...routeMap.contextReducer,
        component: ContextReducer
    }
    // {
    //     ...routeMap.someQuestion,
    //     component: UseLayoutEffect
    // }
];
export default routes;
