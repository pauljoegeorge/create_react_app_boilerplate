import React from 'react';
import { Route } from 'react-router-dom';
import HomeRoutes from './pages/Home/route';
import SettingRoutes from './pages/Setting/route';

const routes = [...HomeRoutes, ...SettingRoutes];

const renderRoute = (route, props) => (
  <Route
    key={route.path}
    path={route.path}
    exact={route.exact}
    render={(restProps) => <route.component {...restProps} {...props} />}
  />
);

export const routeGenerator = ({ ...props }) => routes.map((route) => renderRoute(route, {
  ...props,
}));
