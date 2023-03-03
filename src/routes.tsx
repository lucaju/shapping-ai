import React from 'react';
import { BasicLayout } from './layouts';
import { HomeView, NotFoundView, WorkshopView } from './views';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <NotFoundView />,
    children: [
      { index: true, element: <HomeView /> },
      { path: 'workshop/:id', element: <WorkshopView /> },
    ],
  },
]);
