import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoader } from 'react-hot-loader';
import Root from './Root';
import Store from './Store';

const store = new Store();

render(
  <HotLoader>
    <Root store={store} />
  </HotLoader>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root'); // eslint-disable-line global-require
    render(
      <HotLoader>
        <NextRoot store={store} />
      </HotLoader>,
      document.getElementById('root')
    );
  });
}
