// @flow weak

import React, {
  Component
}                 from 'react';
// import PropTypes  from 'prop-types';
import {
  BrowserRouter as Router
}                               from 'react-router-dom';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import { createBrowserHistory } from 'history';
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme              from 'material-ui/styles/getMuiTheme';
import Theme                    from './theme';
import App                      from './containers/app/App';

const store           = configureStore();
const history         = createBrowserHistory();
const syncedHistory   = syncHistoryWithStore(history, store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
          <Router history={syncedHistory}>
            <App />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Root;
