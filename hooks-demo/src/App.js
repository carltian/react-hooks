import React from 'react';
import _ from 'lodash';
import {
    BrowserRouter as Router, // 使用as相当于重命名，如果需要从浏览器路由改成HasRouter只需要在这里把BrowserRouter改成HasRouter就可以了，其他地方还是使用Router包着不需要改变
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import routes from './app/routes';

function App () {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <ul className="routers">
                        {routes.map((link, index) => {
                            const to = `${link.path}`;
                            return (
                                <li key={index}>
                                    <Link to={to}>{link.path}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="demos">
                        {_.map(routes, (routeItem) => {
                            const {
                                component,
                                path,
                                exact = false
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
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
