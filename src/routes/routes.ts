import { LayoutHorizontalSidenav as mbigalke } from 'components/layouts/mbigalke/LayoutHorizontalSidenav';
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
  {
    path: '/badezimmer',
    name: 'Badezimmer',
    icon: 'fas fa-bath',
    layout: sstiels,
    onSidenav: true,
    component: () => lazy(() => import('pages/badezimmer/Badezimmer')),
  },
  {
    path: '/bigalke',
    name: 'Bigalke',
    layout: mbigalke,
    onSidenav: false,
    component: () => lazy(() => import('pages/bigalke/Landing')),
  },
  {
    path: '/roborock',
    name: 'Roborock',
    layout: mbigalke,
    onSidenav: false,
    component: () => lazy(() => import('components/iobroker/roborock/components/widget/full/RoborockWidgetCardFull')),
  },
];
