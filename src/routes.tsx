import React from 'react';
import BlankLayout from './layouts/BlankLayout';
import NotFoundView from './views/errors/NotFoundView';
import HomeView from './views/homepage';

const routes = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
    ],
  },
];

export default routes;
