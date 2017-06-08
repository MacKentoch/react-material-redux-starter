// @flow weak

import React                from 'react';
import { render }           from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { AppContainer }     from 'react-hot-loader';
import Root                 from './Root';

import 'babel-polyfill';
import 'animate.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import './style/index.scss';

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();


const renderApp = RootComponent => {
  render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    BootstrapedElement
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    './Root',
    () => {
      const RootComponent = require('./Root').default;
      renderApp(RootComponent);
    }
  );
}
