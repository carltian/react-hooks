import { routeMap } from './routeConfig';
import Main from '../pages/main/Main';
import Counter from '../pages/main/Counter';

const routes = [
    {
        ...routeMap.main,
        component: Main,
    },
    {
      ...routeMap.counter,
      component: Counter,
  },
];
export default routes;
