import { routeMap } from './routeConfig';
import Counter from '../pages/Counter';
import UseState from '../pages/UseState';
import UseEffect from '../pages/UseEffect';

const routes = [
    {
        ...routeMap.main,
        component: null,
    },
    {
      ...routeMap.counter,
      component: Counter,
    },
    {
      ...routeMap.useState,
      component: UseState,
    },
    {
      ...routeMap.useEffect,
      component: UseEffect,
    },
];
export default routes;
