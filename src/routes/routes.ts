import { IRoute, lazy } from './routes.config';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Übersicht',
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
];
