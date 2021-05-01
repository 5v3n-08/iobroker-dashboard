import { LayoutHorizontalSidenav } from 'components/layouts/LayoutHorizontalSidenav';
import { LayoutBlank } from 'components/layouts/LayoutBlank';
import { IRoute, lazy } from './routes.config';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Landing',
    onSidenav: false,
    component: lazy(() => import('pages/landing/Landing')),
    layout: LayoutHorizontalSidenav,
  },
];
