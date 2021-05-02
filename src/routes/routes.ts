import { IRoute, lazy } from './routes.config';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Ünersicht',
    icon: 'fas fa-home',
    onSidenav: true,
    component: () => lazy(() => import('pages/landing/Landing')),
  },
  {
    path: '/badezimmer',
    name: 'Badezimmer',
    icon: 'fas fa-bath',
    onSidenav: true,
    component: () => lazy(() => import('pages/badezimmer/Badezimmer')),
  },
  {
    path: '/bigalke',
    name: 'Bigalke',
    onSidenav: false,
    component: () => lazy(() => import('pages/bigalke/Landing')),
  },
];
