import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';


const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map((route, i) => 
                <Route 
                    key={i}
                    element={route.element} 
                    path={route.path} 
                    exact={route.exact}
                />
            )}
            {publicRoutes.map((route, i) => 
                <Route 
                    key={i}
                    element={route.element} 
                    path={route.path} 
                    exact={route.exact}
                />
            )}
            <Route path="*" element={<Navigate to="/posts" replace />}/>
      </Routes>
    );
};

export default AppRouter;