import { createBrowserRouter } from 'react-router';
import { HomePage } from '../heroes/pages/home/HomePage';
// import { SearchPage } from '@/heroes/pages/search/SearchPage';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { lazy } from 'react';


const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'heroes/1',
        element: <HeroPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
