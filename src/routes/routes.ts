import { IRoute, lazy } from './routes.config';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Landing',
    onSidenav: false,
    component: lazy(() => import('pages/landing/Landing')),
  },
];
