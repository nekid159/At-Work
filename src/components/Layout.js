import React from 'react';
import Header from './header/Header';
import { Routes, Route } from 'react-router-dom';
import RoutesConfig from '../router/RoutesConfig';

const Layout = () => {

  return (
        <>
            <Header/>
            <Routes>
                {RoutesConfig.map((route, key) => (
                    <Route key={key} path={route.url} element={route.element} />
                ))}
            </Routes>
        </>
    );
};

export default Layout;