import { lazy } from 'react';
// import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { Navigate } from 'react-router-dom';
import isAuthenticated from '../utils/auth';
import RednderLayout from 'layout';
import ViewUser from 'views/pages/authentication/users';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||==============================
const MainRoutes = {
  path: '/',
  element: <RednderLayout />,
  children: [
    {
      path: '/',
      element: isAuthenticated() ? <DashboardDefault /> : <Navigate to="/pages/login/login3" />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: isAuthenticated() ? <DashboardDefault /> : <Navigate to="/pages/login/login3" />,
        },
      ],
    },
    {
      path: 'pages',
      children: [
        {
          path: 'view-users',
          element: isAuthenticated() ? <ViewUser /> : <Navigate to="/pages/login/login3" />,
        },
      ],
    },
    // ... other protected routes
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: isAuthenticated() ? <UtilsTypography /> : <Navigate to="/pages/login/login3" />,
        },
        {
          path: 'util-color',
          element: isAuthenticated() ? <UtilsColor /> : <Navigate to="/pages/login/login3" />,
        },
        {
          path: 'util-shadow',
          element: isAuthenticated() ? <UtilsShadow /> : <Navigate to="/pages/login/login3" />,
        },
      ],
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: isAuthenticated() ? <UtilsTablerIcons /> : <Navigate to="/pages/login/login3" />,
        },
        {
          path: 'material-icons',
          element: isAuthenticated() ? <UtilsMaterialIcons /> : <Navigate to="/pages/login/login3" />,
        },
      ],
    },
    {
      path: 'sample-page',
      element: isAuthenticated() ? <SamplePage /> : <Navigate to="/pages/login/login3" />,
    },
    {
      path: '/pages/login/login3',
      element: isAuthenticated() ? <Navigate to="/" /> :<AuthLogin3 />,
    },
    {
      path: '/pages/register/register3',
      element: isAuthenticated() ? <Navigate to="/" /> :<AuthRegister3 />,
    },
  ],
};

export default MainRoutes;