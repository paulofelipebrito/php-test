import { RouteObject } from 'react-router-dom';
import RootLayout from '../components/templates/RootLayout';
import Clients from '../pages/Clients';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const pages: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/clients',
        element: <Clients />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default pages;
