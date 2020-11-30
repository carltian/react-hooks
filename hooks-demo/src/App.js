import _ from 'lodash';
import { 
	BrowserRouter as Router,  //使用as相当于重命名，如果需要从浏览器路由改成HasRouter只需要在这里把BrowserRouter改成HasRouter就可以了，其他地方还是使用Router包着不需要改变
	Switch,		//和js里面的switch语法差不多，这个是用来判断路由地址
  Route,
  Redirect,	//重定向，用来判断用户输入的地址是否满足条件，不满足就重定向到xxx页面
} from "react-router-dom"; 
import './App.css';
import routes from './app/routes';

function App() {
  return (
    <div className="App">
      <Router>
				<Switch>
          {_.map(routes, (routeItem) => {
              const {
                  component,
                  path,
                  exact = false,
              } = routeItem;
              return (
                  <Route
                      key={path}
                      exact={exact}
                      path={path}
                      component={component}
                  />
              );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
