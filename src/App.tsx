import React, { Fragment, FunctionComponent } from 'react';
import { Router } from 'routes/Router';
import { ErrorSnackbar } from 'components/error-snackbar/ErrorSnackbar';
import { WebsocketContextProvider } from 'hooks/useWebsocket';
import moment from 'moment';
import 'moment/locale/de';

//* ----- Import styles -----
import 'semantic-ui-css/semantic.min.css';
// import './customSemantic.less';
import './customAntd.less';
import './App.scss';
import './vendor/styles/bootstrap.scss';
import './vendor/styles/appwork.scss';
import './vendor/styles/theme-corporate.scss';
import './vendor/styles/colors.scss';
import './vendor/styles/uikit.scss';
import '@fortawesome/fontawesome-free/js/all';

const App: FunctionComponent = () => {
  moment.locale('de');
  return (
    <Fragment>
      <WebsocketContextProvider>
        <Router />
        <ErrorSnackbar />
      </WebsocketContextProvider>
    </Fragment>
  );
};

export default App;
