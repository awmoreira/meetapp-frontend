import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import store from './store';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <GlobalStyle />
    </Fragment>
  </Provider>
);

export default App;
