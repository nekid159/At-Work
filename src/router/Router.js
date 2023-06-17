import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import Layout from "../components/Layout";

const PageTitleUpdater = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    const getPageName = (url) => {
        const matchedRoute = RoutesConfig.find((route) => route.url === url);
        return matchedRoute ? matchedRoute.name : "AT-WORK";
    };

    useEffect(() => {
        const pageTitle = getPageName(currentPage);
        document.title = pageTitle;
    }, [currentPage]);

    return null;
};

const Router = () => {
    return (
        <BrowserRouter>
            <PageTitleUpdater />
            <Layout />
        </BrowserRouter>
    );
};

export default Router;
