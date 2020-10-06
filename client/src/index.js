import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlusCircle,
  faList,
  faCog,
  faHome,
  faUtensils,
  faFolderPlus,
  faFolderOpen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import history from './history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store';

library.add(
  fab,
  faPlusCircle,
  faList,
  faCog,
  faHome,
  faUtensils,
  faFolderPlus,
  faFolderOpen,
  faTrash,
);

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
