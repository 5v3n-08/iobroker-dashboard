import React, { useEffect } from 'react';
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { NotFound } from 'pages/not-found/NotFound';
import { DefaultLayout, titleTemplate, defaultRoute, IRoute } from './routes.config';
import { routes } from './routes';

interface IProps {}
export const Router: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  useEffect(() => {
    const removeLoadingClass = () => {
      document.documentElement.classList.remove('app-loading');
    };
    // Remove splash screen
    const splashScreen = document.querySelector('.app-splash-screen');
    if (splashScreen) {
      // splashScreen.style.opacity = 0;
      setTimeout(() => {
        if (splashScreen && splashScreen.parentNode) {
          splashScreen.parentNode.removeChild(splashScreen);
        }
        removeLoadingClass();
      }, 300);
    } else {
      removeLoadingClass();
    }
  }, []);

  const setTitle = (title: string) => {
    document.title = titleTemplate.replace('%s', title);
  };
  const scrollTop = (to: number, duration: number, element = document.scrollingElement || document.documentElement) => {
    if (element.scrollTop === to) return;
    const start = element.scrollTop;
    const change = to - start;
    const startDate = +new Date();

    if (!duration) {
      element.scrollTop = to;
      return;
    }

    // t = current time; b = start value; c = change in value; d = duration
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = easeInOutQuad(currentTime, start, change, duration);

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };

    animateScroll();
  };

  const buildRoute = (route: IRoute) => {
    if (!route.layout) route.layout = DefaultLayout;
    if (!route.exact) route.exact = true;

    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={(props) => {
          // On small screens collapse sidenav
          if (window.layoutHelpers && window.layoutHelpers.isSmallScreen()) {
            window.layoutHelpers.setCollapsed(true, false);
          }

          // Scroll page to top on route render
          scrollTop(0, 0);
          // Return layout
          return (
            <route.layout {...props}>{route.component && <route.component {...props} setTitle={setTitle} scrollTop={scrollTop} />}</route.layout>
          );
        }}
      />
    );
  };

  return (
    <AppRouter basename={'/'}>
      <Switch>
        {routes.map((route) => {
          if (route.component !== null) {
            return [buildRoute(route)];
          }
          if (route.children) return _.map(route.children, (child) => buildRoute(child));
        })}

        {defaultRoute !== '/' && <Redirect from="/" to={defaultRoute} exact={true} />}

        {/* NotFound page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </AppRouter>
  );
};

interface IRoutes {
  [key: string]: IRoute[];
}
export interface IRedirectState {
  from?: string;
}
