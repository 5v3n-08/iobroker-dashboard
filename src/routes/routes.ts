import { LayoutHorizontalSidenav as sstiels } from 'components/layouts/sstiels/LayoutHorizontalSidenav';
import { IRoute, lazy } from './routes.config';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Übersicht',
    icon: 'fas fa-home',
    layout: sstiels,
    onSidenav: true,
    component: () => lazy(() => import('pages/landing/Landing')),
  },
];
