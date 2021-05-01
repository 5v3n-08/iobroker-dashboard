import React from 'react';
import loadable, { LoadableComponent } from '@loadable/component';
import pMinDelay from 'p-min-delay';
import { Loader } from 'components/layouts/Loader/Loader';

//* ----- Import Layouts -----
import { Layout1 } from 'components/layouts/Layout1';

// Lazy load component
// eslint-disable-next-line
export const lazy = (cb: any) =>
  // eslint-disable-next-line
  loadable((props) => pMinDelay(cb(), 200), { fallback: <Loader /> });
// ---
// Default application layout

export const DefaultLayout = Layout1;

// ---
// Document title template

export const titleTemplate = '%s | ioBroker';

// ---
// Routes
//
// Note: By default all routes use { "exact": true }. To change this
// behaviour, pass "exact" option explicitly to the route object

export const defaultRoute = '/';

export interface IRoute {
  path: string;
  component: LoadableComponent<any> | null;
  children?: IRoute[];
  name: string;
  icon?: string;
  exact?: boolean;
  layout?: any;
  onSidenav?: boolean;
}
