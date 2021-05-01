import React, { Fragment, FunctionComponent } from 'react';
import { Router } from 'routes/Router';

//* ----- Import styles -----
import 'semantic-ui-css/semantic.min.css';
// import './customSemantic.less';
// import './customAntd.less';
import './App.scss';
import './vendor/styles/bootstrap.scss';
import './vendor/styles/appwork.scss';
import './vendor/styles/theme-corporate.scss';
import './vendor/styles/colors.scss';
import './vendor/styles/uikit.scss';
import '@fortawesome/fontawesome-free/js/all';
import { ErrorSnackbar } from 'components/error-snackbar/ErrorSnackbar';

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Router />
      <ErrorSnackbar />
    </Fragment>
  );
};

export default App;
