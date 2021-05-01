import React from 'react';
import Sidenav from 'vendor/libs/sidenav/index';
import SidenavRouterLink from 'vendor/libs/sidenav/SidenavRouterLink';
import SidenavDivider from 'vendor/libs/sidenav/SidenavDivider';
import SidenavMenu from 'vendor/libs/sidenav/SidenavMenu';
import SidenavHeader from 'vendor/libs/sidenav/SidenavHeader';
import _ from 'lodash';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  orientation?: 'vertical' | 'horizontal';
  sidenavBg?: string;
}

export const LayoutSidenav: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const location = useLocation();

  const layoutSidenavClasses = () => {
    let bg = props.sidenavBg;
    if (props.orientation === 'horizontal' && (bg?.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg?.replace(' sidenav-dark', '').replace(' sidenav-light', '').replace('-darker', '').replace('-dark', '');
    }
    return `bg-${bg} ` + (props.orientation !== 'horizontal' ? 'layout-sidenav' : 'layout-sidenav-horizontal container-p-x flex-grow-0');
  };

  const toggleSidenav = () => {
    // layoutHelpers.toggleCollapsed()
  };

  const isMenuActive = (url: string) => {
    return location.pathname.indexOf(url) === 0;
  };

  const isMenuOpen = (url: string) => {
    return location.pathname.indexOf(url) === 0 && props.orientation !== 'horizontal';
  };

  return (
    <Sidenav orientation={props.orientation} className={layoutSidenavClasses()}>
      {/* Brand demo (see src/demo.css) */}
      {props.orientation !== 'horizontal' && (
        <React.Fragment>
          <div className="app-brand demo">
            <span className="app-brand-logo demo bg-primary">
              <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity=".25" offset="0"></stop>
                    <stop stopOpacity=".1" offset=".3"></stop>
                    <stop stopOpacity="0" offset=".9"></stop>
                  </linearGradient>
                  <linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlinkHref="#a"></linearGradient>
                  <linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlinkHref="#a"></linearGradient>
                </defs>
                <path
                  style={{ fill: '#fff' }}
                  transform="translate(-.1)"
                  d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"
                ></path>
                <path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path>
                <path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path>
                <path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path>
              </svg>
            </span>
            <Link to="/" className="app-brand-text demo sidenav-text font-weight-normal ml-2">
              Appwork
            </Link>
            <a href="#toggle" className="layout-sidenav-toggle sidenav-link text-large ml-auto" onClick={toggleSidenav}>
              <i className="ion ion-md-menu align-middle"></i>
            </a>
          </div>
          <SidenavDivider className="mt-0" />
        </React.Fragment>
      )}

      {/* Links */}
      <div className={`sidenav-inner ${props.orientation !== 'horizontal' ? 'py-1' : ''}`}>
        {/* Dashboards */}
        <SidenavMenu icon="ion ion-md-speedometer" linkText="Dashboards" active={isMenuActive('/dashboards')} open={isMenuOpen('/dashboards')}>
          <SidenavRouterLink to="/dashboards/dashboard-1">Dashboard 1</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-2">Dashboard 2</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-3">Dashboard 3</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-4">Dashboard 4</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-5">Dashboard 5</SidenavRouterLink>
        </SidenavMenu>

        {/* Layouts */}
        <SidenavMenu icon="ion ion-ios-albums" linkText="Layouts" active={isMenuActive('/layouts')} open={isMenuOpen('/layouts')}>
          <SidenavRouterLink to="/layouts/options">Layout options</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/helpers">Layout helpers</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/layout-1">Layout 1</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/layout-1-flex">Layout 1 (Flex)</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/layout-2">Layout 2</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/layout-2-flex">Layout 2 (Flex)</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/without-navbar">Without navbar</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/without-navbar-flex">Without navbar (Flex)</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/without-sidenav">Without sidenav</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/horizontal-sidenav">Horizontal sidenav</SidenavRouterLink>
          <SidenavRouterLink to="/layouts/blank">Blank</SidenavRouterLink>
        </SidenavMenu>

        <SidenavDivider className="mb-1" />
        <SidenavHeader className="small font-weight-semibold">ELEMENTS</SidenavHeader>

        <SidenavRouterLink to="/typography" icon="ion ion-md-quote">
          Typography
        </SidenavRouterLink>

        {/* Layouts */}
        <SidenavMenu icon="ion ion-md-cube" linkText="User inteface" active={isMenuActive('/ui')} open={isMenuOpen('/ui')}>
          <SidenavRouterLink to="/ui/buttons">Buttons</SidenavRouterLink>
          <SidenavRouterLink to="/ui/badges">Badges</SidenavRouterLink>
          <SidenavRouterLink to="/ui/dropdowns">Dropdowns</SidenavRouterLink>
          <SidenavRouterLink to="/ui/navs">Navs</SidenavRouterLink>
          <SidenavRouterLink to="/ui/pagination-and-breadcrumbs">Pagination and breadcrumbs</SidenavRouterLink>
          <SidenavRouterLink to="/ui/progress-bars">Progress bars</SidenavRouterLink>
          <SidenavRouterLink to="/ui/list-groups">List groups</SidenavRouterLink>
          <SidenavRouterLink to="/ui/notifications">Notifications</SidenavRouterLink>
          <SidenavRouterLink to="/ui/modals">Modals</SidenavRouterLink>
          <SidenavRouterLink to="/ui/tooltips-and-popovers">Tooltips and popovers</SidenavRouterLink>
          <SidenavRouterLink to="/ui/thumbnails">Thumbnails</SidenavRouterLink>
          <SidenavRouterLink to="/ui/cards">Cards</SidenavRouterLink>
          <SidenavRouterLink to="/ui/accordion">Accordion</SidenavRouterLink>
          <SidenavRouterLink to="/ui/app-brand">App brand</SidenavRouterLink>
          <SidenavRouterLink to="/ui/navbar">Navbar</SidenavRouterLink>
          <SidenavRouterLink to="/ui/sidenav">Sivenav</SidenavRouterLink>
          <SidenavRouterLink to="/ui/footer">Footer</SidenavRouterLink>
          <SidenavRouterLink to="/ui/carousel">Carousel</SidenavRouterLink>
          <SidenavRouterLink to="/ui/lightbox">Lightbox</SidenavRouterLink>
          <SidenavRouterLink to="/ui/drag-and-drop">Drag&amp;Drop</SidenavRouterLink>
          <SidenavRouterLink to="/ui/treeview">Treeview</SidenavRouterLink>
          <SidenavRouterLink to="/ui/react-avatar-editor">React Avatar Editor</SidenavRouterLink>
          <SidenavRouterLink to="/ui/react-big-calendar">React Big Calendar</SidenavRouterLink>
          <SidenavRouterLink to="/ui/plyr">Plyr</SidenavRouterLink>
          <SidenavRouterLink to="/ui/spinners">Spinners</SidenavRouterLink>
        </SidenavMenu>

        {/* Forms */}
        <SidenavMenu icon="ion ion-md-switch" linkText="Forms" active={isMenuActive('/forms')} open={isMenuOpen('/forms')}>
          <SidenavRouterLink to="/forms/layouts-and-elements">Layouts and elements</SidenavRouterLink>
          <SidenavRouterLink to="/forms/controls">Controls</SidenavRouterLink>
          <SidenavRouterLink to="/forms/custom-controls">Custom controls</SidenavRouterLink>
          <SidenavRouterLink to="/forms/input-groups">Input groups</SidenavRouterLink>
          <SidenavRouterLink to="/forms/switchers">Switchers</SidenavRouterLink>
          <SidenavRouterLink to="/forms/input-spinner">Input spinner</SidenavRouterLink>
          <SidenavRouterLink to="/forms/sliders">Sliders</SidenavRouterLink>
          <SidenavRouterLink to="/forms/selects-and-tags">Selects and tags</SidenavRouterLink>
          <SidenavRouterLink to="/forms/pickers">Pickers</SidenavRouterLink>
          <SidenavRouterLink to="/forms/editors">Editors</SidenavRouterLink>
          <SidenavRouterLink to="/forms/file-upload">File upload</SidenavRouterLink>
          <SidenavRouterLink to="/forms/react-stepzilla">React Stepzilla</SidenavRouterLink>
          <SidenavRouterLink to="/forms/react-bootstrap-typeahead">React Bootstrap Typeahead</SidenavRouterLink>
          <SidenavRouterLink to="/forms/extras">Extras</SidenavRouterLink>
        </SidenavMenu>

        {/* Tables */}
        <SidenavMenu icon="ion ion-md-grid" linkText="Tables" active={isMenuActive('/tables')} open={isMenuOpen('/tables')}>
          <SidenavRouterLink to="/tables/bootstrap">Bootstrap</SidenavRouterLink>
          <SidenavRouterLink to="/tables/react-table">React Table</SidenavRouterLink>
          <SidenavRouterLink to="/tables/react-bootstrap-table-2">React Bootstrap Table 2</SidenavRouterLink>
        </SidenavMenu>

        {/* Charts */}
        <SidenavMenu icon="ion ion-md-pie" linkText="Charts" active={isMenuActive('/charts')} open={isMenuOpen('/charts')}>
          <SidenavRouterLink to="/charts/google-map-react">Google Map React</SidenavRouterLink>
          <SidenavRouterLink to="/charts/react-chartjs-2">React Chartjs 2</SidenavRouterLink>
          <SidenavRouterLink to="/charts/recharts">Recharts</SidenavRouterLink>
          <SidenavRouterLink to="/charts/react-sparklines">React Sparklines</SidenavRouterLink>
        </SidenavMenu>

        {/* Icons */}
        <SidenavMenu icon="ion ion-ios-heart" linkText="Icons" active={isMenuActive('/icons')} open={isMenuOpen('/icons')}>
          <SidenavRouterLink to="/icons/font-awesome-5">Font Awesome 5</SidenavRouterLink>
          <SidenavRouterLink to="/icons/ionicons">Ionicons</SidenavRouterLink>
          <SidenavRouterLink to="/icons/linearicons">Linearicons</SidenavRouterLink>
          <SidenavRouterLink to="/icons/open-iconic">Open Iconic</SidenavRouterLink>
          <SidenavRouterLink to="/icons/stroke-icons-7">Stroke Icons 7</SidenavRouterLink>
        </SidenavMenu>

        {/* Miscellaneous */}
        <SidenavMenu icon="ion ion-ios-flask" linkText="Miscellaneous" active={isMenuActive('/miscellaneous')} open={isMenuOpen('/miscellaneous')}>
          <SidenavRouterLink to="/miscellaneous/brand-colors">Brand colors</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/react-masonry-component">React Masonry Component</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/spinkit">SpinKit</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/react-ladda">React Ladda</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/numeral">Numeral</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/react-idle-timer">React Idle Timer</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/react-perfect-scrollbar">React Perfect Scrollbar</SidenavRouterLink>
          <SidenavRouterLink to="/miscellaneous/react-clipboardjs">React Clipboardjs</SidenavRouterLink>
        </SidenavMenu>

        <SidenavDivider className="mb-1" />
        <SidenavHeader className="small font-weight-semibold">EXTRAS</SidenavHeader>

        {/* Pages */}
        <SidenavMenu
          icon="ion ion-md-document"
          linkText="Pages"
          badgeText="59"
          badgeVariant="primary"
          active={isMenuActive('/pages')}
          open={isMenuOpen('/pages')}
        >
          <SidenavMenu linkText="Articles" active={isMenuActive('/pages/articles')} open={isMenuOpen('/pages/articles')}>
            <SidenavRouterLink to="/pages/articles/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/articles/edit">Edit</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Authentication" active={isMenuActive('/pages/authentication')} open={isMenuOpen('/pages/authentication')}>
            <SidenavRouterLink to="/pages/authentication/login-v1">Login v1</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/register-v1">Register v1</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/login-v2">Login v2</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/register-v2">Register v2</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/login-v3">Login v3</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/register-v3">Register v3</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/login-and-register">Login + register</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/lock-screen-v1">Lock screen v1</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/lock-screen-v2">Lock screen v2</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/password-reset">Password reset</SidenavRouterLink>
            <SidenavRouterLink to="/pages/authentication/email-confirm">Email confirm</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Education" active={isMenuActive('/pages/education')} open={isMenuOpen('/pages/education')}>
            <SidenavRouterLink to="/pages/education/courses-v1">Courses v1</SidenavRouterLink>
            <SidenavRouterLink to="/pages/education/courses-v2">Courses v2</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="E-commerce" active={isMenuActive('/pages/e-commerce')} open={isMenuOpen('/pages/e-commerce')}>
            <SidenavRouterLink to="/pages/e-commerce/product-list">Product list</SidenavRouterLink>
            <SidenavRouterLink to="/pages/e-commerce/product-item">Product item</SidenavRouterLink>
            <SidenavRouterLink to="/pages/e-commerce/product-edit">Product edit</SidenavRouterLink>
            <SidenavRouterLink to="/pages/e-commerce/order-list">Order list</SidenavRouterLink>
            <SidenavRouterLink to="/pages/e-commerce/order-detail">Order detail</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Forums" active={isMenuActive('/pages/forums')} open={isMenuOpen('/pages/forums')}>
            <SidenavRouterLink to="/pages/forums/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/forums/threads">Threads</SidenavRouterLink>
            <SidenavRouterLink to="/pages/forums/discussion">Discussion</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Messages v1" active={isMenuActive('/pages/messages-v1')} open={isMenuOpen('/pages/messages-v1')}>
            <SidenavRouterLink to="/pages/messages-v1/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/messages-v1/item">Item</SidenavRouterLink>
            <SidenavRouterLink to="/pages/messages-v1/compose">Compose</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Messages v2" active={isMenuActive('/pages/messages-v2')} open={isMenuOpen('/pages/messages-v2')}>
            <SidenavRouterLink to="/pages/messages-v2/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/messages-v2/item">Item</SidenavRouterLink>
            <SidenavRouterLink to="/pages/messages-v2/compose">Compose</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Messages v3" active={isMenuActive('/pages/messages-v3')} open={isMenuOpen('/pages/messages-v3')}>
            <SidenavRouterLink to="/pages/messages-v3/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/messages-v3/item">Item</SidenavRouterLink>
            <SidenavRouterLink to="/pages/messages-v3/compose">Compose</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Projects" active={isMenuActive('/pages/projects')} open={isMenuOpen('/pages/projects')}>
            <SidenavRouterLink to="/pages/projects/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/projects/item">Item</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Tickets" active={isMenuActive('/pages/tickets')} open={isMenuOpen('/pages/tickets')}>
            <SidenavRouterLink to="/pages/tickets/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/tickets/edit">Edit</SidenavRouterLink>
          </SidenavMenu>
          <SidenavMenu linkText="Users" active={isMenuActive('/pages/users')} open={isMenuOpen('/pages/users')}>
            <SidenavRouterLink to="/pages/users/list">List</SidenavRouterLink>
            <SidenavRouterLink to="/pages/users/view">View</SidenavRouterLink>
            <SidenavRouterLink to="/pages/users/edit">Edit</SidenavRouterLink>
          </SidenavMenu>
          <SidenavRouterLink to="/pages/account-settings">Account settings</SidenavRouterLink>
          <SidenavRouterLink to="/pages/chat">Chat</SidenavRouterLink>
          <SidenavRouterLink to="/pages/clients">Clients</SidenavRouterLink>
          <SidenavRouterLink to="/pages/contacts">Contacts</SidenavRouterLink>
          <SidenavRouterLink to="/pages/faq">FAQ</SidenavRouterLink>
          <SidenavRouterLink to="/pages/file-manager">File manager</SidenavRouterLink>
          <SidenavRouterLink to="/pages/gallery">Gallery</SidenavRouterLink>
          <SidenavRouterLink to="/pages/help-center">Help center</SidenavRouterLink>
          <SidenavRouterLink to="/pages/invoice">Invoice</SidenavRouterLink>
          <SidenavRouterLink to="/pages/kanban-board">Kanban board</SidenavRouterLink>
          <SidenavRouterLink to="/pages/pricing">Pricing</SidenavRouterLink>
          <SidenavRouterLink to="/pages/profile-v1">Profile v1</SidenavRouterLink>
          <SidenavRouterLink to="/pages/profile-v2">Profile v2</SidenavRouterLink>
          <SidenavRouterLink to="/pages/search-results">Search results</SidenavRouterLink>
          <SidenavRouterLink to="/pages/task-list">Task list</SidenavRouterLink>
          <SidenavRouterLink to="/pages/teams">Teams</SidenavRouterLink>
          <SidenavRouterLink to="/pages/vacancies">Vacancies</SidenavRouterLink>
          <SidenavRouterLink to="/pages/voting">Voting</SidenavRouterLink>
        </SidenavMenu>

        {/* Complete UI */}
        <SidenavMenu icon="ion ion-logo-buffer" linkText="Complete UI">
          <SidenavRouterLink to="/complete-ui/base">Base</SidenavRouterLink>
          <SidenavRouterLink to="/complete-ui/plugins">Plugins</SidenavRouterLink>
          <SidenavRouterLink to="/complete-ui/charts">Charts</SidenavRouterLink>
        </SidenavMenu>
      </div>
    </Sidenav>
  );
};
